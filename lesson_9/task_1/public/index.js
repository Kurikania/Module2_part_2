// 1. Написать свою подключаемую js библиотеку для работы с массивом, хранящим целые числа.
// Библиотека должна обладать следующими методами:
// - поиск минимального элемента в переданном массиве;
// - поиск максимально элемента в переданном массиве;
// - расчет среднего арифметического значения элементов переданного массива;
// - создание копии (клонирование) переданного массива.


export let myUtils = {
    minElem: function(arr) {
        let min = Math.min(...arr)
        return min
    },
    maxElem: function(arr) {        
        let max = Math.max(...arr)
        return max
    },
    average: function(arr){
        return arr.reduce((a,b) => a + b, 0) / arr.length
    },
    copyArr: function(arr) {
        return [...arr]
    }
}


