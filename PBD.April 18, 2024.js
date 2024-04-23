function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function print(fx, a, b) {
    console.log(fx(a, b));
}
print(sumar, 6, 8)
print(restar, 6, 8)

print(function (a, b) {
    return a * b
}, 6, 8)

print((a, b) => a / b, 6, 8);

// ENUMS
const seasons = {
    SUMMER:{
        name: "Verano"
    },
    WINTER:{
        name: "Invierno"
    },
    SPRING:{
        name: "Primavera"
    },
    AUTUMN:{
        name: "Otoño"
    }
}

function multiplyCall(next, error) {
    try {
        let value1=arguments[2]
        let value2 = arguments[3]
        if (value1 === undefined) {
            throw "Missing Params. Expected 2 numbers."
        }
        if (value2 === undefined) {
            throw "Missing Params. Expecting a second number."
        }
        let result = multiply(value1, value2);
        next(result);
    } catch (err) {
        error(err)
    }
}
multiplyCall(5, 6); // Js doesn't checks the number of arguments passed to a function.