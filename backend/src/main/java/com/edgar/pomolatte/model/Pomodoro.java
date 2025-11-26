package com.edgar.pomolatte.model;
import lombok.Data;

@Data
public class Pomodoro {
    private int minutos;
    private int segundos;
    private boolean rodando;

    public Pomodoro() {
        this.minutos = 25;
        this.segundos = 0;
        this.rodando = false;
    }
}

