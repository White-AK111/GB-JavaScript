"use strict";

let mover = {
    /**
     * Получает и отдаёт направление от игрока.
     * @returns {int} Возвращаем направление, введённое игроком.
     */
    getDirection() {
        const avaliableDirections = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        while (true) {
            let direction = parseInt(prompt('Введите число куда Вы хотите переместиться (1-9), "Отмена" для выхода'));
            if (isNaN(direction)) {
                return null;
            }
            if (!avaliableDirections.includes(direction)) {
                alert('Для перемещения необхдимо ввести число от 1 до 9. \n5 - стоять на месте.');
                continue;
            }
            return direction;
        }
    },

    /**
     * Возвращает следующую точку в которой будет находиться игрок после движения.
     * @param {int} direction Направление движения игрока.
     * @returns {{x: int, y: int}} Следующая позиция игрока.
     */
    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y,
        };
        switch (direction) {
            case 1:
                nextPosition.x--;
                nextPosition.y++;
                break;
            case 2:
                nextPosition.y++;
                break;
            case 3:
                nextPosition.x++;
                nextPosition.y++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 5:
                nextPosition.x;
                nextPosition.y;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 7:
                nextPosition.x--;
                nextPosition.y--;
                break;
            case 8:
                nextPosition.y--;
                break;
            case 9:
                nextPosition.x++;
                nextPosition.y--;
                break;
        }
        return nextPosition;
    }
};