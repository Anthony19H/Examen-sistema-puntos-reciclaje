package com.examen.reciclaje.controllers;

import com.examen.reciclaje.entidades.PuntoReciclaje;
import com.examen.reciclaje.repositories.PuntoReciclajeRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/puntos")
@CrossOrigin(origins = "http://localhost:5173")
public class PuntoReciclajeController {

    private final PuntoReciclajeRepository repository;

    public PuntoReciclajeController(PuntoReciclajeRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<PuntoReciclaje> listar() {
        return repository.findAll();
    }

    @PostMapping
    public ResponseEntity<PuntoReciclaje> guardar(@RequestBody PuntoReciclaje punto) {
        PuntoReciclaje guardado = repository.save(punto);
        return ResponseEntity.ok(guardado);
    }
}
