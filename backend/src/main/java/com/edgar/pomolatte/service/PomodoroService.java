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
    public void passarUmSegundo() {
        if (!pomodoro.isRunning()) return;

        if (pomodoro.getSeconds() > 0) {
        pomodoro.setSeconds(pomodoro.getSeconds() - 1);
        } else if (pomodoro.getMinutes() > 0) {
            pomodoro.setMinutes(pomodoro.getMinutes() - 1);
            pomodoro.setSeconds(59);
        } else {
            manageModeSwitch();
        }

        if (pomodoro.isRunning()) {
            System.out.println(pomodoro.getMode().toString() + " " + pomodoro.getMinutes() + ":" + pomodoro.getSeconds());
        }
    }

    private void manageModeSwitch() {
        pomodoro.setRunning(false);

        if (pomodoro.getMode() == Pomodoro.Mode.POMODORO) {

            if (pomodoro.getSessions() <= 0) {
                pomodoro.setMode(Pomodoro.Mode.LONG_BREAK);
                pomodoro.setSessions(4);
            }

            else {
                pomodoro.setMode(Pomodoro.Mode.SHORT_BREAK);
                pomodoro.setSessions(pomodoro.getSessions() - 1);
            }
        } else {
            pomodoro.setMode(Pomodoro.Mode.POMODORO);
        }
        pomodoro.resetaTempo();
        pomodoro.setRunning(true);
    }


    public void iniciar() {
        pomodoro.setRunning(true);
    }

    public void stop() {
        pomodoro.setRunning(false);
    }

}
