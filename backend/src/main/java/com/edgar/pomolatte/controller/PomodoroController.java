package com.edgar.pomolatte.controller;

import com.edgar.pomolatte.service.PomodoroService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/pomolatte")
@CrossOrigin(origins = "*")
public class PomodoroController {
    private final PomodoroService service;
    public PomodoroController(PomodoroService service) {
        this.service = service;
    }


    @GetMapping("/ola")
    public String dizerOla() {
        return "Ola front-end";
    }


    @GetMapping("/iniciar")
    public String iniciar() {
    service.iniciar();
    return "Rodando";
    }

    @GetMapping("/parar")
    public String parar(){
        service.stop();
        return "Parando";
    }

}
