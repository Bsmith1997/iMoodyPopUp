package iMoodyPopUp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import iMoodyPopUp.model.*;
import iMoodyPopUp.dao.*;

import java.util.ArrayList;
import java.util.List;

@Service
public class IMoodyPopUpService {

  @Autowired
  IMoodyPopUpRepository iMoodyPopUpRepository;
  @Autowired
  PersonRepository personRepository;
  
  @Transactional
  public Person createPerson(String name) {
      Person person = new Person();
      person.setName(name);
      personRepository.save(person);
      return person;
  }

  @Transactional
  public Person getPerson(String name) {
      Person person = personRepository.findPersonByName(name);
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
}
