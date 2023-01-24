package com.tainara.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tainara.model.Tools;

@Repository
public interface ToolsRepository extends JpaRepository<Tools, Long>{
    
}
