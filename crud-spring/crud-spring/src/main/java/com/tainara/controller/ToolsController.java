package com.tainara.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tainara.model.Tools;
import com.tainara.repository.ToolsRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/tools")
@AllArgsConstructor
public class ToolsController {
    
   private ToolsRepository  toolsRepository;
   

    @GetMapping
    public List<Tools> list(){
        return toolsRepository.findAll();
        // select * from tabela where 
    }
}
