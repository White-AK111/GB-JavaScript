"use strict";

/*____________________________________________________________________
2.
(это задание не является частью учебной программы, делайте его по желанию). Для игры бродилка (которая
есть в дополнительных видео), добавить возможность ходить по диагонали цифрами 1, 3, 7, 9
Также необходимо сделать так, чтобы пользователь не мог совершить шаг в стенку, т.е. при направлении в стенку
и игрок оставался на том же месте где стоял.
______________________________________________________________________
*/

let walkerGame = {
    //Запускает игру.
    run() {
        renderer.clear();
        renderer.render();
        while (true) {
            //Получаем направление от игрока.
            const direction = mover.getDirection();
            if (direction === null) {
                console.log("Игра окончена");
                walkerGame.init();
                millionaireGame.init();
                return;
            }
            const nextPoint = mover.getNextPosition(direction);
            //Если переход вне границ поля, то не двигаемся.
            if (nextPoint.x >= 0 && nextPoint.x <= (config.colsCount - 1) && nextPoint.y >= 0 && nextPoint.y <= (config.rowsCount - 1)) {
                renderer.clear();
                player.move(nextPoint);
                renderer.render();
            }
        }
    },

    //При открытии страницы.
    init() {
        console.log("Чтобы начать игру наберите walkerGame.run() и нажмите Enter.");
    }
};

walkerGame.init();