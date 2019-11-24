package iMoodyPopUp.dao;

import org.springframework.data.repository.CrudRepository;

import iMoodyPopUp.model.Person;

public interface PersonRepository extends CrudRepository<Person, String>{

    Person findPersonByName(String name);

}
