package com.agencia.pectros.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agencia.pectros.dto.UserDTO;
import com.agencia.pectros.services.UserService;


@RestController
@RequestMapping(value = "/users")
public class UserController {
	@Autowired
	private UserService service;
	
	@GetMapping
	public Page<UserDTO> findAll(Pageable pageable) {
		return service.findAll(pageable);
	}
	
	@GetMapping(value = "/{id}")
	public UserDTO findById(@PathVariable Long id) {
		return service.findById(id);
	}
	
	
}
