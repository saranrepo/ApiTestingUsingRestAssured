package POJOClasses;

public class PostGameDetail {
	
	String name;
	String releaseDate;
	String category;
	String rating;
	int id;
	int reviewScore;
	
	public PostGameDetail() {
		
	}
	public PostGameDetail(String name, String releaseDate, String category, String rating, int id, int reviewScore)
	{
		this.name=name;
		this.releaseDate=releaseDate;
		this.category=category;
		this.rating=rating;
		this.id=id;
		this.reviewScore=reviewScore;
	}
	/*public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getReleaseDate() {
		return releaseDate;
	}
	public void setReleaseDate(String releaseDate) {
		this.releaseDate = releaseDate;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getRating() {
		return rating;
	}
	public void setRating(String rating) {
		this.rating = rating;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getReviewScore() {
		return reviewScore;
	}
	public void setReviewScore(int reviewScore) {
		this.reviewScore = reviewScore;
	}
	public String toString() {
        return "Video game " + this.name + " has an ID of: " + this.id + ", and a review score of: " + this.reviewScore;
    }
*/
}
