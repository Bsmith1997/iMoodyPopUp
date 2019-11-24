package iMoodyPopUp.dto;

public class PersonDto {
  
  private String firstName;
  private String lastName;
  private String password;
  private String email;

  public PersonDto(){
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
  
}
