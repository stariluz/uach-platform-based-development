class Animal{
    constructor(name, soundToEmit){
        // Due convention every properties
        // of the class starts with _
        this._name=name;
        this._soundToEmit = soundToEmit;
        this.#eat();
    }
    get name(){
        return this._name
    }

    set name(value){
        this._name=value;
    }
    
    // # Eat allow us to hide the method from outside of the class
    #eat(){
        console.log("Estoy comiendo");
    }
    sound(){
        return this._soundToEmit();
    }
    static is(obj){
        return obj instanceof Animal;
    }
}

class Dog extends Animal{
    constructor(name, soundToEmit, type){
        super(name, soundToEmit);
        this._type=type;
    }
    
}
class Cat extends Animal{
    constructor(name, soundToEmit){
        console.log(soundToEmit);
        super(name, soundToEmit);
    }
    
}
class Robot {
    constructor(){}
}

const dog={name:"Dog"};
const animal=new Animal("Dog");

animal.name="Cat";

let d= new Dog("sparky",()=>{
    console.log("Dude i told you UAF");
},"Chihuahua");

let c=new Cat("Rebeca", ()=>{
    console.log("Sssssss Rrrrrrr Miau we Miau");
});
let r=new Robot();
let animals=[d,c,r];

animals.forEach((animal,i)=>{    
    
    console.log(Animal.is(animal))
    if(Animal.is(animal)){
        animal.sound();
    }
});

// Concatenación
// It has more processing cost
let name="Luis"
let lastName="Ramirez"
console.log("Mi name is "+name+" "+lastName);

// Interpolación
console.log(`Mi name is ${name} ${lastName}`);
