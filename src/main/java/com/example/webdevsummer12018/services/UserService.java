package com.example.webdevsummer12018.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.webdevsummer12018.repositories.UserRepository;

import com.example.webdevsummer12018.models.User;


@RestController
public class UserService {
	@Autowired
	UserRepository repository;
	
	@GetMapping("/api/user")
	public List<User> findAllUsers(){
		return (List<User>) repository.findAll();
	}
}
