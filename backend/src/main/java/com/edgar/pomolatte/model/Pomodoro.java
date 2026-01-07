package com.edgar.pomolatte.model;
import lombok.Data;
import lombok.Getter;

@Data
public class Pomodoro {
    private int minutes;
    private int seconds;
    private int sessions;
    private Mode mode;
    private boolean running;

    public Pomodoro() {
        this.mode = Mode.POMODORO;
        this.minutes = mode.getDefaultMinutes();
        this.seconds = mode.getDefaultSeconds();
        this.running = false;
        this.sessions = 2;
        resetaTempo();
    }

    public void resetaTempo(){
        this.minutes = this.mode.defaultMinutes;
        this.seconds = this.mode.defaultSeconds;
    }

    @Getter
    public enum Mode {
        POMODORO(0, 2),
        SHORT_BREAK(0, 5),
        LONG_BREAK(0, 10);

        private int defaultMinutes;
        private int defaultSeconds;

        Mode(int defaultMinutes, int defaultSeconds){
            this.defaultMinutes = defaultMinutes;
            this.defaultSeconds = defaultSeconds;
        }

    }


}

