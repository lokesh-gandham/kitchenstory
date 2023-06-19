package com.kitchenstory.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kitchenstory.entities.tags;
import com.kitchenstory.services.TagsService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/tags")
public class TagsController {
	
	@Autowired
	private  TagsService tagsService;

	
	//Constructor with Dependency Injection	
	
	
	@GetMapping("get/all")
	public ResponseEntity<?> getAllTags(){
		List<tags> currentTags = tagsService.findAllTags();	
     return  ResponseEntity.ok(currentTags);
	}
	
	/* Method to update Tag stored in the database */
	@PutMapping("/tag/update/{id}")
	public ResponseEntity<tags> updateTagProductCount(@RequestBody tags tag, @PathVariable("id") Long id) {
		System.out.println("Tag Passed In:\n" + tag.toString());
		System.out.println("Id Passed In:" + id);
		tags updatedTag = tagsService.updateTag(tag);
		return new ResponseEntity<>(updatedTag, HttpStatus.OK);
	}
		
	@PostMapping(path="/add")
    public ResponseEntity<?> addTags(@RequestBody tags tag){
		tags newTag = tag;
		tagsService.addTags(newTag);
		return ResponseEntity.ok(newTag);
	}
	
	@DeleteMapping("delete/{id}")	
    public ResponseEntity<?> deleteTag(@PathVariable("id") Long id){
		tagsService.deleteTag(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	

}//end class