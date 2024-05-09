function reverseAndSquare(arr) {
    // Перевертаємо масив
    let reversedArray = arr.reverse();

    // Підносимо до квадрату числові значення масиву
    for (let i = 0; i < reversedArray.length; i++) {
        if (typeof reversedArray[i] === 'number') {
            reversedArray[i] = Math.pow(reversedArray[i], 2);
        }
    }

    return reversedArray;
}

// Приклад використання функції
let inputArray = [1, 2, 3, 'a', 'b', 4];
let result = reverseAndSquare(inputArray);
console.log(result); // Виведе: [16, 9, 4, 'b', 'a', 1]
