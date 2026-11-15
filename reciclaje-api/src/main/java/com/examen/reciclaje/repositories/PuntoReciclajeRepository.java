package com.examen.reciclaje.repositories;

import com.examen.reciclaje.entidades.PuntoReciclaje;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PuntoReciclajeRepository extends JpaRepository<PuntoReciclaje, Integer> {
}
