package com.kevin.todoapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kevin.todoapp.domain.TodoItem;
import com.kevin.todoapp.repository.TodoRepository;

@Service
public class TodoService {

	@Autowired
	private TodoRepository todoRepo;
	
	public List<TodoItem> fetchAllTodoItems (){
		return todoRepo.fetchAllTodoItems();
	}
}
