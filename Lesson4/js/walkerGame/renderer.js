"use strict";

let renderer = {

    //Поле.
    map: "",

    /**
     * Отображает игру в консоли.
     */
    render() {
        for (let row = 0; row < config.rowsCount; row++) {
            for (let col = 0; col < config.colsCount; col++) {
                if (player.y === row && player.x === col) {
                    this.map += 'o ';
                } else {
                    this.map += 'x ';
                }
            }
            this.map += '\n';
        }
        console.log("Ваше положение на поле в виде 0.");
        console.log(this.map);
    },

    clear() {
        //Чистим конслоль.
        console.clear();
        //Чистим карту.
        this.map = "";
    }
};