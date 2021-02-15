package com.kevin.todoapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kevin.todoapp.domain.TodoItem;
import com.kevin.todoapp.repository.TodoRepository;
import java.util.Optional;

@Service
public class TodoService {

	@Autowired
	private TodoRepository todoRepo;
	
	public List<TodoItem> fetchAllTodoItems (){
		return todoRepo.fetchAllTodoItems();
	}

	public TodoItem updateTodoItem(Integer id, TodoItem todoItem) {
		Optional<TodoItem> todoOpt = todoRepo.fetchAllTodoItems()
											 .stream()
											 .filter(item -> item.getId().equals(id))
											 .findAny();
		
		if(todoOpt.isPresent()) {
			TodoItem item = todoOpt.get();
			item.setIsDone(todoItem.getIsDone());
			item.setTask(todoItem.getTask());
			return item;
		}
		return null;
	}
}
