package com.edgar.pomolatte;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

@SpringBootApplication
@EnableScheduling // Habilita o agendamento de tarefas
public class PomolatteApplication {

	public static void main(String[] args) {
		SpringApplication.run(PomolatteApplication.class, args);
	}

}
