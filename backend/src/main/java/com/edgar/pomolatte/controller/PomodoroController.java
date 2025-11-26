package com.edgar.pomolatte.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/pomolatte")
@CrossOrigin(origins = "http//localhost:5173")
public class PomodoroController {
    @org.springframework.web.bind.annotation.GetMapping("/teste")
    public String teste() {
        return "Backend online e pronto para o React!";
    }
}
