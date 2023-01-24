package com.tainara;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.tainara.model.Tools;
import com.tainara.repository.ToolsRepository;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDataBase(ToolsRepository toolsRepository){
		return args -> {
				toolsRepository.deleteAll();
				Tools t = new Tools();
				t.setNome("Desengipante");
				t.setCategoria("Quimicos");
				t.setDisponibilidade("s");
				toolsRepository.save(t);
		};
	}
}
