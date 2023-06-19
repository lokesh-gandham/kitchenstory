package com.kitchenstory.repo;

import org.springframework.data.jpa.repository.JpaRepository;


import com.kitchenstory.entities.tags;

public interface TagsRepository extends JpaRepository<tags,Long> {
	void deleteTagById(Long id);

}
