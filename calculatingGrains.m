clear all; close all; clc;

%%% Para calcular granos

dur = 15000; % duracion del audio en ms
windowSize = 200; % duracion de la venta en ms
vel = 1; %velocidad de reproducción
points = zeros(1,dur/windowSize,1);

for i=1:length(points)
  points(i) = windowSize*i;
endfor