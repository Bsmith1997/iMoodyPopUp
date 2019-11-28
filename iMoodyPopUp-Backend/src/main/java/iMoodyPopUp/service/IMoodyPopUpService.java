package iMoodyPopUp.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import iMoodyPopUp.dao.IMoodyPopUpRepository;
import iMoodyPopUp.dao.PersonRepository;
import iMoodyPopUp.model.Person;

@Service
public class IMoodyPopUpService {

  @Autowired
  IMoodyPopUpRepository iMoodyPopUpRepository;
  @Autowired
  PersonRepository personRepository;

  @Transactional
  public Person createPerson(String firstName, String lastName, String password,
      String email) {
  if(!validatePassword(password)) {
      throw new IllegalArgumentException("Password must be 3 to 15 characters in length, "
              + "contain at least one uppercase, one lowercase letter and a digit");
  }
  if(!validateEmail(email)) {
      throw new IllegalArgumentException("Email must follow email format");
  }

  if(firstName == null || lastName == null) {
      throw new IllegalArgumentException("Name fields cannot be null");
  }
  Person person = new Person();
  person.setFirstName(firstName);
  person.setLastName(lastName);
  person.setPassword(password);
  person.setEmail(email);


  personRepository.save(person);
  return person;
  }


  @Transactional
  public Person getPerson(String email) {
      if (email == null || email.trim().length() == 0) {
          throw new IllegalArgumentException("Email cannot be empty!");
      }
      Person person = personRepository.findPersonByEmail(email);
      return person;
  }

  @Transactional
  public List<Person> getAllPersons() {
      return toList(personRepository.findAll());
  }

  private <T> List<T> toList(Iterable<T> iterable){
    List<T> resultList = new ArrayList<T>();
    for (T t : iterable) {
        resultList.add(t);
    }
    return resultList;
  }

  private boolean validateEmail(String email) {
    if(email == null) {
        return false;
    }
    int at = email.indexOf('@');
    if(at <= 0) {
        return false;
    }
    int period = email.substring(at).indexOf('.');
    if(period <= 1 || period == email.length() - at-1) {
        return false;
    }
    return true;
}

  /**
   * Validates a password
   * @param password
   * @return
   */
  private boolean validatePassword(String password) {
      if(password == null || password.length() > 15 || password.length() < 3) {
          return false;
      }
      if(password.toUpperCase().equals(password) || password.toLowerCase().equals(password)) {
          return false;
      }
      for(int i = 0; i < password.length(); i++) {
          if(Character.isDigit(password.charAt(i))) {
              return true;
          }
      }
      return false;
  }


public Person updateValue(Person p, double time, int prevVal, int postVal) {
	double averageTime = p.getAverageTime();
	int total = p.getTotal();
	p.setPrevTime(time);
	p.setPrevMoodValAfter(postVal);
	p.setPrevMoodValBeg(prevVal);
	p.setAverageTime(approxRollingAverage(averageTime, time, total));
	p.setAverageValueAfter(approxRollingAverage(p.getAverageValueAfter(), postVal, total));
	p.setAverageValueBeg(approxRollingAverage(p.getAverageValueBeg(), prevVal, total));
	p.setTotal(total + 1);
	personRepository.save(p);
	return p;
}

double approxRollingAverage (double avg, double newSample, int numSamples) {
	if(numSamples == 0) {
		return newSample;
	}

    avg -= avg / numSamples;
    avg += newSample / numSamples;

    return avg;
}



}
