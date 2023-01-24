package com.tainara.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
@Entity
@Table(name= "Tools")

 public class Tools {
    
    @Id  //denota que é a chave primaria
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonProperty("_id")
    private Long id;

    //@Column(name = "nomequalquer")
    @Column(length = 100)
    private String nome;
    
    @Column(length = 100)
    private String categoria;
    
    @Column(length = 200)
    private Long quantidade;
    
    @Column(length = 50)
    private Long patrimonio;
    
    @Column(length = 10)
    private String disponibilidade;

}
 