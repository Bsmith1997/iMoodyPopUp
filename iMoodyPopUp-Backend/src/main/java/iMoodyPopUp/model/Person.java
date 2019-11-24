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
      
}

