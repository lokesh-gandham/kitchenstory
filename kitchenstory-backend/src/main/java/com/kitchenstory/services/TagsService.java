package com.kitchenstory.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.kitchenstory.entities.tags;
import com.kitchenstory.repo.TagsRepository;

@Service
public class TagsService {
	
	//Properties
	@Autowired
	private TagsRepository tagsRepo;	
	
	//Constructor with Dependency Injection of the Tags Repository	
	
	
	//CRUD Methods
	public List<tags> findAllTags() {		
		return tagsRepo.findAll();
	}
	
	public tags addTags(tags tag) {
		return tagsRepo.save(tag);
	}	


	public tags updateTag(tags tag) {
		return tagsRepo.save(tag);
	}
	
	public tags updateTag(tags tag, Long id) {		
		if(tag.getId() == id)
			return tagsRepo.save(tag);
		return null;
	}

	 @Transactional
	public void deleteTag(Long id) {
		tagsRepo.deleteTagById(id);		
	}

}