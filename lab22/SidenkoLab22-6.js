function arrayOperations(N) {
    // Створення масиву та заповнення його довільними цілими значеннями
    let array = [];
    for (let i = 0; i < N; i++) {
        array.push(Math.floor(Math.random() * 100)); // Генерація випадкового цілого числа від 0 до 99
    }

    // Знаходження найбільшого та найменшого значень масиву
    let max = Math.max(...array);
    let min = Math.min(...array);

    // Обчислення загальної суми елементів масиву
    let sum = array.reduce((acc, curr) => acc + curr, 0);

    // Обчислення середнього арифметичного всіх елементів масиву
    let average = sum / N;

    // Виведення непарних значень масиву
    let oddValues = array.filter(value => value % 2 !== 0);

    // Виведення результатів
    console.log("Максимальне значення:", max);
    console.log("Мінімальне значення:", min);
    console.log("Загальна сума елементів:", sum);
    console.log("Середнє арифметичне:", average);
    console.log("Непарні значення масиву:", oddValues);
}

// Виклик функції з параметром N = 10 (наприклад)
arrayOperations(10);
