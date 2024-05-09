function analyzeNumber(number) {
    // Визначення чи є число позитивним або негативним
    if (number > 0) {
        console.log(number + " є позитивним числом.");
    } else if (number < 0) {
        console.log(number + " є негативним числом.");
    } else {
        console.log(number + " дорівнює нулю.");
    }

    // Перевірка на просте число
    let isPrime = true;
    if (number <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        console.log(number + " є простим числом.");
    } else {
        console.log(number + " не є простим числом.");
    }

    // Перевірка на ділення без залишку на 2, 3, 5, 6, 9
    const divisors = [2, 3, 5, 6, 9];
    let divisorsWithoutRemainder = [];
    divisors.forEach(divisor => {
        if (number % divisor === 0) {
            divisorsWithoutRemainder.push(divisor);
        }
    });
    if (divisorsWithoutRemainder.length > 0) {
        console.log(number + " ділиться без залишку на: " + divisorsWithoutRemainder.join(", "));
    } else {
        console.log(number + " не ділиться без залишку на жодне з перелічених чисел.");
    }
}

// Приклад виклику функції з числом 17
analyzeNumber(17);
