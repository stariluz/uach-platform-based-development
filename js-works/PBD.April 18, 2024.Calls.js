// Programacion funcional

//Calculadora

// define: n1 * n2 = r (5 * 4) = 5 + 5 + 5 + 5
function multiply(n1, n2) {
    let result = 0;
    for (let i = 0; i < n2; i++)
        result += n1;
    return result;
}

// Eval: 5 * 4 = 20
let finalResult = multiply(5, 4);
console.log("Final result = ", finalResult);

// define: n1 / n2 = r (20 / 4) = 20 - 4 - 4 - 4 - 4 - 4
function divide(n1, n2) {
    let result = 1
    while ((n1 - n2) > 0) {
        result++;
        n1 -= n2;
    }
    return result;
}

//eval: 20 / 4 = 5;
console.log("Final result = ", divide(20, 4));

// eval: (5*4) / 10 = 2
finalResult = divide(multiply(5, 4), 10);
console.log("Final result = ", finalResult);

// eval: ((5*4) / 10) * 6 = 12
finalResult = multiply(divide(multiply(5, 4), 10), 6);
console.log("Final result = ", finalResult);
// En el codigo, mientras mas adentro estan las operaciones, se resuelven primero.

//ES6 = CallBacks, funcion que recibe 2 funciones
function multiplyCall(success, error) {
    try {
        let n1 = arguments[2];
        let n2 = arguments[3];

        // = asignacion
        // == comparacion de contenido ("5" = 5)
        // === comparacion de contenido y tipo

        if (n1 == null || n2 == null)    // || = or
            throw ("Missing params: Expected 2 numbers.");
        let result = multiply(n1, n2);

        success(result);
    }
    catch (ex) {
        error(ex);
    }
};

function divideCall(success, error) {
    try {
        let n1 = arguments[2];
        let n2 = arguments[3];

        if (n1 == null || n2 == null)
            throw ("Missing params: Expected 2 numbers.");
        if (n2 == 0)
            throw ("Divide over zero its not possible")
        let result = divide(n1, n2);

        success(result);
    }
    catch (ex) {
        error(ex);
    }
}

function okCallback(result) {
    console.log(result);
};

function errorCallback(ex) {
    console.log(ex);
};

console.log("===== Callbacks =====")

// eval: 5 * 4

multiplyCall(okCallback, errorCallback, 5, 4);
multiplyCall(okCallback, errorCallback, 5);

// eval: 20 / 4
divideCall(okCallback, errorCallback, 20, 4);
divideCall(okCallback, errorCallback, 20, 0);

// eval: (5*4) / 10
/* En los callbacks, mientras mas afuera este una operacion mas pronto se resuelve 
al contrario de anteriormente, entonces primero hariamos el multiply al contrario del divide
como en la linea 31*/

multiplyCall((result) => {
    divideCall(okCallback, errorCallback, result, 10);
}, errorCallback, 5, 4);

// eval: ((5*4) / 10) * 6 = 12
multiplyCall((result) => {
    divideCall((result) => {
        multiplyCall(okCallback, errorCallback, result, 6);
    }, errorCallback, result, 10);
}, errorCallback, 5, 4);


// ES6 => Promises
// return new Promise();

// obj => result {n1: value, n2: value}
function multiplyPromise(result) {
    return new Promise((resolve, reject) => {
        if (result.n1 == null || result.n2 == null) {
            throw ("missing params: expected 2 numbers");
        }
        // {} we are refering to a prototype
        // new Object()  we are refering to an instance of an object
        let res = new Object();
        res.n1 = multiply(result.n1, result.n2);
        resolve(res);
    })
}

function dividePromise(result) {
    return new Promise((resolve, reject) => {
        if (result.n1 == null || result.n2 == null) {
            throw ("Missing params: expected 2 numbers");
        }
        if (result.n2 == 0) {
            throw ("Math expression: division by 0 can't be evaluated");
        }
        // {} we are refering to a prototype
        // new Object()  we are refering to an instance of an object
        let res = new Object();
        res.n1 = divide(result.n1, result.n2);
        resolve(res);
    })
}

console.log(" ============ PROMISES ============ ");
let numbers = new Object();
numbers.n1 = 5;
numbers.n2 = 4;

multiplyPromise(numbers).then(okCallback).catch(errorCallback);

// eval: (5*4)/10*6=12
numbers = new Object();
numbers.n1 = 5;
numbers.n2 = 4;

multiplyPromise(numbers).then((data) => {
    data.n2 = 10;
    return dividePromise(data);
}).then((data) => {
    data.n2 = 6;
    return multiplyPromise(data);
}).then(okCallback).catch(errorCallback);

// Async await
// eval: (5*4)/10*6=12
async function operations() {
    let num = new Object();
    num.n1 = 5;
    num.n2 = 4;

    let val1 = await multiplyPromise(num);
    val1.n2 = 10;

    let val2 = await dividePromise(val1);
    val2.n2 = 6;

    let val3 = await multiplyPromise(val2);
    console.log(val3.n1)
}
operations();