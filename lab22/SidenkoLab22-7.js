// Функція для створення двовимірного масиву розмірності n x n
function createArray(n) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr.push([]);
        for (var j = 0; j < n; j++) {
            // Генеруємо довільне ціле число в межах від -10 до 10
            arr[i].push(Math.floor(Math.random() * 21) - 10);
        }
    }
    return arr;
}

// Функція для заміни чисел на головній діагоналі
function modifyDiagonal(arr) {
    var n = arr.length;
    for (var i = 0; i < n; i++) {
        if (arr[i][i] < 0) {
            arr[i][i] = 0;
        } else {
            arr[i][i] = 1;
        }
    }
}

// Створюємо двовимірний масив розмірності 5x5
var array = createArray(5);

// Виводимо початковий масив
console.log("Початковий масив:");
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Модифікуємо головну діагональ
modifyDiagonal(array);

// Виводимо змінений масив
console.log("Модифікований масив:");
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}
