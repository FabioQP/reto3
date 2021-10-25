package co.edu.usa.mintic.reto3.controller;

import co.edu.usa.mintic.reto3.model.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import co.edu.usa.mintic.reto3.model.Game;
import co.edu.usa.mintic.reto3.service.GameService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/Game")
@CrossOrigin(origins = "*",methods = {RequestMethod.PUT,RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE})
public class GameController {

    @Autowired
    private GameService service;

    @GetMapping("/all")
    public List<Game> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Game> getGame(@PathVariable("id") int id) {
        return service.getGame(id);
    }

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Game save(@RequestBody Game game) {
        return service.save(game);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Game update(@RequestBody Game game) { return service.update(game); }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable("id") int id) { return service.delete(id); }
}

