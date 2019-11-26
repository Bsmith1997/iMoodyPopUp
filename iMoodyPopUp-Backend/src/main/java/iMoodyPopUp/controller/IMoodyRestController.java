package iMoodyPopUp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import iMoodyPopUp.dto.PersonDto;
import iMoodyPopUp.model.Person;
import iMoodyPopUp.service.IMoodyPopUpService;


@CrossOrigin(origins = "*")
@RestController
public class IMoodyRestController {

  @Autowired
  IMoodyPopUpService service;

  @PostMapping(value = { "/newUser/{email}", "/newStudent/{email}/" })
  public PersonDto createStudent(@RequestParam String firstName, @RequestParam String lastName,
          @RequestParam String password, @PathVariable("email")String email)
                  throws IllegalArgumentException {

      Person person = service.createPerson(firstName, lastName, email, password);
      return convertToDto(person);
  }


   /**
    *
    * @param username
    * @param password
    * @return A logged in user
    * @throws IllegalArgumentException
    */
   @GetMapping(value = { "/login/{username}/{password}", "/login/{username}/{password}/" })
   public PersonDto logIn(@PathVariable("email") String email,
           @PathVariable("password") String password) throws IllegalArgumentException {

       Person person = service.getPerson(email);
       if(person == null) {
           throw new IllegalArgumentException("There is no such User!");
       }
       if(!person.getPassword().equals(password)) {
           throw new IllegalArgumentException("Incorrect Password!");
       }
       return convertToDto(person);
   }

   private PersonDto convertToDto(Person s) {
     if (s == null) {
         throw new IllegalArgumentException("There is no such user");
     }
     return new PersonDto(s.getFirstName(), s.getLastName(), s.getPassword(),
             s.getEmail());
   }

}
