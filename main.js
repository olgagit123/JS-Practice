const person = new Object({
    name: 'Olga',
    age: 25,
    greet: function() {
        console.log('Hi')
    }
})

Object.prototype.sayHello = function() {
    console.log('Hello!')
}