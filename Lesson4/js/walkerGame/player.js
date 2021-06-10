"use strict";

/**
 * Позиция игрока.
 * @property {int} x Позиция по координате X.
 * @property {int} y Позиция по координате Y.
 */
const player = {
    x: 0,
    y: 0,

    /**
     * Сдвиг игрока по заданному направлению.
     * @param {{x: int, y: int}} nextPoint Следующая точка игрока. 
     */
    move(nextPoint) {
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    }
};