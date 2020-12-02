// 3. Подключить стороннюю библиотеку для юнит тестирования.
// Написать несколько тестов для функции, рассчитывающей y = 1/x + sqrt(x).


function calc_y(x) {
    y = 1/x + Math.sqrt(x);
    return y
}

describe("Тестирование функции", function(){
    let msg = "Позитивный тест x = 4; y = 2.25";
    it(msg, function(){
        let rez = calc_y(4);
        expect(rez).toBe(2.25);
    });
    let msg2 = "Тест: x='10'";
    it(msg2, function(){
        let rez = calc_y(10);
        expect(rez).toBeDefined();
    });
    let msg3 = "Негативный тест: x='b', y=1";
    it(msg3, function(){
        let rez = calc_y("b");
        expect(rez).toBeNaN();
    });
    let msg4 = "Негативный тест: x=-4";
    it(msg4, function(){
        let rez = calc_y(-4);
        expect(rez).not.toBe(2.25);
    });
});

// toBeLessThan()