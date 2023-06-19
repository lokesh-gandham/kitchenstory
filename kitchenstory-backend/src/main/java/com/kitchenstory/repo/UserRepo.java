package com.kitchenstory.repo;



import org.springframework.data.jpa.repository.JpaRepository;


import org.springframework.stereotype.Repository;

import com.kitchenstory.entities.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long>{
	public User findByUsername(String username);
}
