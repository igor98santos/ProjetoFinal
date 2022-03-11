package com.agencia.pectros.dto;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import com.agencia.pectros.entities.Destino;

public class DestinoDTO {
	
	@DateTimeFormat(pattern = "dd/MM/yyyy")
	private LocalDate dataIda;
	@DateTimeFormat(pattern = "dd/MM/yyyy")
	private LocalDate dataVolta;
	private String destinoOrigem;
	private String destino;
	
	public DestinoDTO() {}

	public DestinoDTO(LocalDate dataIda, LocalDate dataVolta, String destinoOrigem, String destino) {
		this.dataIda = dataIda;
		this.dataVolta = dataVolta;
		this.destinoOrigem = destinoOrigem;
		this.destino = destino;
	}
	
	public DestinoDTO(Destino destiny) {
		dataIda = destiny.getDataIda();
		dataVolta = destiny.getDataVolta();
		destinoOrigem = destiny.getDestinoOrigem();
		destino = destiny.getDestino();
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
