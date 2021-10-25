package co.edu.usa.mintic.reto3.repository;

import org.springframework.data.repository.CrudRepository;

import co.edu.usa.mintic.reto3.model.Message;

public interface MessageRepository extends CrudRepository<Message, Integer> {
}
