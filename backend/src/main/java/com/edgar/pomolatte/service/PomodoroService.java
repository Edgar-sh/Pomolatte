package com.edgar.pomolatte.service;

import com.edgar.pomolatte.model.Pomodoro;

public class PomodoroService {
    Pomodoro pomodoro = new Pomodoro();

    public Pomodoro getPomodoro() {
        return pomodoro;
    }

    public void passarUmSegundo(){
        if(!pomodoro.isRodando()) return;

        int minuto = pomodoro.getMinutos();
        int segundo = pomodoro.getSegundos();

        if (segundo > 0 ) {
            pomodoro.setSegundos(segundo - 1);
        } else if (minuto > 0) {
            pomodoro.setMinutos(minuto - 1);
            pomodoro.setSegundos(59);
        }else {
            pomodoro.setRodando(false);
        }
    }

    public void iniciar(){
        pomodoro.setRodando(true);
    }
}
