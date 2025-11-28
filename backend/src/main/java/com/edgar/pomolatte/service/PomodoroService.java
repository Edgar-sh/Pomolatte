package com.edgar.pomolatte.service;

import com.edgar.pomolatte.model.Pomodoro;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

@Service
public class PomodoroService {
    Pomodoro pomodoro = new Pomodoro();

    public Pomodoro getPomodoro() {
        return pomodoro;
    }
    @Scheduled(fixedRate = 1000)
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

        if (pomodoro.isRodando()) {
            System.out.println("Tic-Tac: " + pomodoro.getMinutos() + ":" + pomodoro.getSegundos());
        }
    }

    public void iniciar(){
        pomodoro.setRodando(true);
    }

    public void stop(){
        pomodoro.setRodando(false);
    }
}
