package co.edu.usa.mintic.reto3.repository;

import org.springframework.data.repository.CrudRepository;

import co.edu.usa.mintic.reto3.model.Game;

public interface GameRepository extends CrudRepository<Game, Integer> {
}
