package iMoodyPopUp.dao;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import iMoodyPopUp.model.Person;


@Repository
public class IMoodyPopUpRepository {
  @Autowired
  EntityManager entityManager;

  @Transactional
  public Person createPerson(String firstName, String lastName, String email, String password) {
      Person p = new Person();
      p.setFirstName(firstName);
      p.setLastName(lastName);
      p.setEmail(email);
      p.setPassword(password);
      entityManager.persist(p);
      return p;
  }

  @Transactional
  public Person getPerson(String email) {
      Person p = entityManager.find(Person.class, email);
      return p;
  }
}
