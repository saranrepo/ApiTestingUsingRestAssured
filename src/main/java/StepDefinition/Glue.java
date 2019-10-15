package StepDefinition;

import org.json.JSONObject;
import org.json.XML;
import org.junit.Assert;
import POJOClasses.PostGameDetail;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class Glue extends Base {
	Response response=null;
	org.json.JSONObject jsonObject=null;
	

    public Glue() throws Exception {
		super();
		// TODO Auto-generated constructor stub
	}

	@Given("^Get all the video game data available in database$")
    public void get_all_the_video_game_data_available_in_database() throws Throwable {
		System.out.println("----------------------------Executing the Get all video game details Scenario----------------------------------------");
		RestAssured.baseURI =prop.getProperty("BaseURI");
    	RequestSpecification request = RestAssured.given().contentType(ContentType.JSON);
    	response=request.when().get();
    	System.out.println("Response :"+response.asString());
    	System.out.println("Response :"+response.getStatusCode());
    	jsonObject = convertXmltoJson(response.asString());
        System.out.println("Converted to Json response: "+jsonObject);
    	org.json.JSONArray objectArray=jsonObject.getJSONObject("videoGames").getJSONArray("videoGame");
    	System.out.println("Total Number of data available is: "+objectArray.length());
    	System.out.println("The first data from the list is: "+jsonObject.getJSONObject("videoGames").getJSONArray("videoGame").get(0));
    	org.json.JSONObject obj=(JSONObject) jsonObject.getJSONObject("videoGames").getJSONArray("videoGame").get(0);
    	int id=obj.getInt("id");
    	System.out.println("value of id is "+id);
    }
	
	@Then("^verify status code \"([^\"]*)\"$")
    public void verify_status_code(String statuscode) throws Throwable {
		int ExpectedStatuscode=Integer.parseInt(statuscode);
		int actualStatusCode=response.getStatusCode();
		Assert.assertEquals("Expected and Actual status code are not same",ExpectedStatuscode, actualStatusCode);
		System.out.println("Expected and actual status code are same");
    }
	
	@Given("^Get Specific video game data available in database by id \"([^\"]*)\"$")
    public void get_specific_video_game_data_available_in_database_by_id_something(String id) throws Throwable {
		System.out.println("----------------------------Executing the Get Method By id Scenario----------------------------------------");
		RestAssured.baseURI =prop.getProperty("BaseURI")+"/"+id;
    	RequestSpecification request = RestAssured.given().contentType(ContentType.JSON);
    	response=request.when().get();
    	System.out.println("Response :"+response.asString());
    	System.out.println("Response :"+response.getStatusCode());
    	jsonObject = convertXmltoJson(response.asString());
        System.out.println("Converted to Json response: "+jsonObject);
    	//System.out.println("does reponse contains name SARAN video game:  "+ response.asString().contains("SARAN video game"));
    	
    }
	
	@And("^verify the id \"([^\"]*)\" and name \"([^\"]*)\"$")
    public void verify_the_id_and_name(String id, String Expectedname) throws Throwable {
		int ExpectedId=Integer.parseInt(id);
		int ID=jsonObject.getJSONObject("videoGame").getInt("id");
    	String ActualName=jsonObject.getJSONObject("videoGame").getString("name");
    	System.out.println("Value of id is: "+ ID);
    	System.out.println("Value of name is: "+ ActualName);
    	Assert.assertEquals(Expectedname, ActualName);
    	Assert.assertEquals(ExpectedId, ID);
    	
    }
	
	 @Given("^Read the data need to be post \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
	    public void read_the_data_need_to_be_post(int id, String name, String releasedate, String category, String rating, int reviewscore) throws Throwable {
		 System.out.println("----------------------------Executing the Post Method  Scenario----------------------------------------");
		 PostGameDetail postDetail=new PostGameDetail(name,releasedate,category,rating,id,reviewscore);
		 RestAssured.baseURI =prop.getProperty("BaseURI");
		 RequestSpecification request = RestAssured.given().contentType(ContentType.JSON).body(postDetail);
		 response=request.when().post();
		 System.out.println("Response :"+response.asString());
		 System.out.println("Response :"+response.getStatusCode());
	    }
	
	 @Then("^verify Json body message$")
	    public void verify_json_body_message() throws Throwable {
		 Assert.assertTrue("Record not inserted successfully",response.asString().contains("Record Added Successfully"));
		 System.out.println("Record inserted Successfully............");
	    }


	 @Given("^Read the data need to be updated \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
	    public void read_the_data_need_to_be_updated(int id, String name, String releasedate, String category, String rating, int reviewscore) throws Throwable {
		 System.out.println("----------------------------Executing the Put/Update Method By id Scenario----------------------------------------");
		 PostGameDetail postDetail=new PostGameDetail(name,releasedate,category,rating,id,reviewscore);
		 RestAssured.baseURI =prop.getProperty("BaseURI")+"/"+id;
		 RequestSpecification request = RestAssured.given().contentType(ContentType.JSON).body(postDetail);
		 response=request.put();
		 System.out.println("Response :"+response.asString());
		 System.out.println("Response :"+response.getStatusCode());
		 jsonObject = convertXmltoJson(response.asString());
	     System.out.println("Converted to Json response: "+jsonObject);
	    }
	 @Then("^verify Json body message \"([^\"]*)\",\"([^\"]*)\"$")
	    public void verify_json_body_message(String Expectedname, String Expectedcategory) throws Throwable {
		 String Actualname=jsonObject.getJSONObject("videoGame").getString("name");
		 String ActualCategory=jsonObject.getJSONObject("videoGame").getString("category");
		 Assert.assertEquals("Expected name and Actual name are not same",Expectedname, Actualname);
		 Assert.assertEquals("Expected category and Actual category are not same",Expectedcategory, ActualCategory);
		 
	    }
	 
	 @Given("^Delete Specific video game data available in database by id \"([^\"]*)\"$")
	    public void delete_specific_video_game_data_available_in_database_by_id_(String id) throws Throwable {
		 System.out.println("----------------------------Executing the Delete Method By id Scenario----------------------------------------");
		 	RestAssured.baseURI =prop.getProperty("BaseURI")+"/"+id;
	    	RequestSpecification request = RestAssured.given().contentType(ContentType.JSON);
	    	response=request.when().delete();
	    	System.out.println("Response :"+response.asString());
	    	System.out.println("Response :"+response.getStatusCode());
	    }
	
	 @Then("^verify Json body delete message$")
	    public void verify_json_body_delete_message() throws Throwable {
		 Assert.assertTrue("Record not deleted successfully",response.asString().contains("Record Deleted Successfully"));
		 System.out.println("Record deleted Successfully............");
	    }

	public org.json.JSONObject convertXmltoJson(String xmlResponse)
	{
		org.json.JSONObject xmlJSONObj = XML.toJSONObject(xmlResponse);
		return xmlJSONObj;
	}


}
