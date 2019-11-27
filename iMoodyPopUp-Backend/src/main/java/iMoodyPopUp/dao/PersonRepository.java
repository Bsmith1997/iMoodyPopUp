package iMoodyPopUp.dao;

import javax.persistence.Entity;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import iMoodyPopUp.model.Person;

public interface PersonRepository extends CrudRepository<Person, String>{

    Person findPersonByName(String name);

}
