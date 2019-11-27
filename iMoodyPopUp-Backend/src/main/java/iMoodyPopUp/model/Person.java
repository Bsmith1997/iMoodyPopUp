package iMoodyPopUp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Person{
private String firstName;
private String lastName;
private String email;
private String password;
private double prevTime;
private double prevMoodValBeg;
private double prevMoodValAfter;
private int total;
private double averageValueBeg;
private double averageValueAfter;
private double averageTime;
private int id;

    public void setId(int value) {
      this.id = value;
      }
      @Id
      @GeneratedValue
      public int getId() {
      return this.id;
      }

      public void setFirstName(String value) {
          this.firstName = value;
      }
      public String getFirstName() {
          return this.firstName;
      }

      public void setLastName(String value) {
          this.lastName = value;
      }

      public String getLastName() {
          return this.lastName;
      }

      public void setEmail(String value) {
          this.email = value;
      }

      public String getEmail() {
          return this.email;
      }

      public void setPassword(String value) {
        this.password = value;
      }

      public String getPassword() {
          return this.password;
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

}

