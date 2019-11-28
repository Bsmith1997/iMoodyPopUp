package iMoodyPopUp.dto;

public class PersonDto {

  private String firstName;
  private String lastName;
  private String password;
  private String email;
  private double prevTime;
  private double prevMoodValBeg;
  private double prevMoodValAfter;
  private int total;
  private double averageValueBeg;
  private double averageValueAfter;
  private double averageTime;
  public PersonDto(){
  }

  public PersonDto(String firstName, String lastName, String password, String email, double prevTime,
		double prevMoodValBeg, double prevMoodValAfter, int total, double averageValueBeg, double averageValueAfter,
		double averageTime) {
	super();
	this.firstName = firstName;
	this.lastName = lastName;
	this.password = password;
	this.email = email;
	this.prevTime = prevTime;
	this.prevMoodValBeg = prevMoodValBeg;
	this.prevMoodValAfter = prevMoodValAfter;
	this.total = total;
	this.averageValueBeg = averageValueBeg;
	this.averageValueAfter = averageValueAfter;
	this.averageTime = averageTime;
}

public PersonDto(String firstName, String lastName, String password, String email){
      this.firstName = firstName;
      this.lastName = lastName;
      this.password = password;
      this.email = email;
  }

  public String getFirstName() {
      return firstName;
  }

  public String getLastName() {
      return lastName;
  }

  public String getPassword() {
      return password;
  }

  public String getEmail() {
      return email;
  }

	public double getPrevTime() {
		return prevTime;
	}

	public void setPrevTime(double prevTime) {
		this.prevTime = prevTime;
	}

	public double getPrevMoodValBeg() {
		return prevMoodValBeg;
	}

	public void setPrevMoodValBeg(double prevMoodValBeg) {
		this.prevMoodValBeg = prevMoodValBeg;
	}

	public double getPrevMoodValAfter() {
		return prevMoodValAfter;
	}

	public void setPrevMoodValAfter(double prevMoodValAfter) {
		this.prevMoodValAfter = prevMoodValAfter;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	public double getAverageValueBeg() {
		return averageValueBeg;
	}

	public void setAverageValueBeg(double averageValueBeg) {
		this.averageValueBeg = averageValueBeg;
	}

	public double getAverageValueAfter() {
		return averageValueAfter;
	}

	public void setAverageValueAfter(double averageValueAfter) {
		this.averageValueAfter = averageValueAfter;
	}

	public double getAverageTime() {
		return averageTime;
	}

	public void setAverageTime(double averageTime) {
		this.averageTime = averageTime;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setEmail(String email) {
		this.email = email;
	}


}
