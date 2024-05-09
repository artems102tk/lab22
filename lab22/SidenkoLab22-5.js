function isDivisible_if(n, x, y) {
    if (n % x === 0 && n % y === 0) {
        return true;
    } else {
        return false;
    }
}

function isDivisible_ternary(n, x, y) {
    return (n % x === 0 && n % y === 0) ? true : false;
}

function isDivisible(n, x, y) {
    return (n % x === 0 && n % y === 0);
}

// Приклад використання для кожної версії функції:
console.log(isDivisible_if(10, 2, 5)); // Виведе: true
console.log(isDivisible_ternary(10, 2, 5)); // Виведе: true
console.log(isDivisible(10, 2, 5)); // Виведе: true
