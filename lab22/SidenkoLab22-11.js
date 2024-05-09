function removeDuplicates(array) {
    // Створюємо новий масив для зберігання унікальних значень
    let uniqueArray = [];

    // Перевіряємо кожен елемент масиву
    for (let i = 0; i < array.length; i++) {
        // Якщо елемент ще не міститься в унікальному масиві, додаємо його
        if (uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }

    return uniqueArray;
}

// Приклад використання функції
let inputArray = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
let result = removeDuplicates(inputArray);
console.log(result); // Виведе: [1, 2, 4, 5, 7, 8, 3, 6]
