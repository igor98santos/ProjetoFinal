package com.agencia.pectros.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.agencia.pectros.dto.DestinoDTO;
import com.agencia.pectros.dto.UserDTO;
import com.agencia.pectros.entities.User;
import com.agencia.pectros.repository.UserRepository;
@Service
public class DestinoService {
	@Autowired
	private UserRepository repository;

	@Transactional(readOnly = true)
	public Page<DestinoDTO> findAll(Pageable pageable) {
		Page<User> result = repository.findAll(pageable);
		Page<DestinoDTO> page = result.map(x -> new DestinoDTO());
		return page;
	}

	@Transactional(readOnly = true)
	public UserDTO findById(Long id) {
		User result = repository.findById(id).get();
		UserDTO dto = new UserDTO(result);
		return dto;
	}
}
