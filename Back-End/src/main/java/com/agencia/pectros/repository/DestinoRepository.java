package com.agencia.pectros.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agencia.pectros.entities.Destino;
@Repository
public interface DestinoRepository extends JpaRepository<Destino, Long> {

}
