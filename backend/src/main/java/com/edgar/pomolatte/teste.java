package com.edgar.pomolatte;

public class teste {
    public static void main(String[] args) {
        int minutos = 2;
        int segundos = 20;

        while (minutos != -1) {
            while (segundos != -1) {
                System.out.println("Segundos: " + segundos);
                segundos--;
            }
            System.out.println("Minutos: " + minutos);
            segundos = 60;
            minutos--;
        }
    }
}
