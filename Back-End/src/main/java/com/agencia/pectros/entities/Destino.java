package com.agencia.pectros.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
public class Destino {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@DateTimeFormat(pattern = "dd/MM/yyyy")
	private LocalDate dataIda;
	@DateTimeFormat(pattern = "dd/MM/yyyy")
	private LocalDate dataVolta;
	private String destinoOrigem;
	private String destino;

	public Destino() {
	}

	public Destino(LocalDate dataIda, LocalDate dataVolta, String destinoOrigem, String destino) {
		super();
		this.dataIda = dataIda;
		this.dataVolta = dataVolta;
		this.destinoOrigem = destinoOrigem;
		this.destino = destino;
	}

	public LocalDate getDataIda() {
		return dataIda;
	}

	public void setDataIda(LocalDate dataIda) {
		this.dataIda = dataIda;
	}

	public LocalDate getDataVolta() {
		return dataVolta;
	}

	public void setDataVolta(LocalDate dataVolta) {
		this.dataVolta = dataVolta;
	}

	public String getDestinoOrigem() {
		return destinoOrigem;
	}

	public void setDestinoOrigem(String destinoOrigem) {
		this.destinoOrigem = destinoOrigem;
	}

	public String getDestino() {
		return destino;
	}

	public void setDestino(String destino) {
		this.destino = destino;
	}

}
