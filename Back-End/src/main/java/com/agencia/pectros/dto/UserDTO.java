package com.agencia.pectros.dto;

import com.agencia.pectros.entities.User;


public class UserDTO {
	private Long id;
	private String nome;
	private String email;
	private String cpf;
	private String senha;

	public UserDTO() {}

	public UserDTO(Long id, String nome, String email, String cpf, String senha) {
		this.id = id;
		this.nome = nome;
		this.email = email;
		this.cpf = cpf;
		this.senha = senha;
	}
	public UserDTO(User user) {
		id = user.getId();
		nome = user.getNome();
		email = user.getEmail();
		cpf = user.getCpf();
		senha = user.getSenha();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
	
}
