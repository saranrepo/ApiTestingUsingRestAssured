package StepDefinition;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Properties;

public class Base {
	public static Properties prop;
	
	public Base() throws Exception
	{
		FileInputStream propFile=new FileInputStream(System.getProperty("user.dir")+"\\src\\main\\resources\\PropertyFiles\\Environment.properties");
		prop=new Properties();
		prop.load(propFile);
		
	}

}
