// Object Literal
// var rect = {
//     width: 100,
//     height: 50,

//     draw: function () {
//         console.log('I am a rectangle');
//         console.log('My width is ' + this.width);
//         console.log('My height is ' + this.height);
//     }
// }
// rect.draw()

// THIS method
/* var rect = {
    width: 100,
    height: 50,

    draw: function () {
        console.log('I am a rectangle');
        this.print()
    },

    print: function () {
        console.log('My width is ' + this.width);
        console.log('My height is ' + this.height);
    }
}
rect.draw();

var another = {
    width: 75,
    height: 30,
    properties: rect.print
}
another.properties() */

// Factory pattern
var createRect = function (width, height) {
    return {
        width: width,
        height: height,

        draw: function () {
            console.log('I am a rectangle');
            this.print()
        },

        print: function () {
            console.log('My width is ' + this.width);
            console.log('My height is ' + this.height);
        }
    }
}
var rect1 = createRect(150, 75)
rect1.draw()
var rect2 = createRect(220, 90)
rect2.draw()

// Constructor pattern
var newRecta = function (width, height) {

    this.width = width
    this.height = height

    this.draw = function () {
        console.log('I am a rectangle');
        this.print()
    }

    this.print = function () {
        console.log('My width is ' + this.width);
        console.log('My height is ' + this.height);

    }
}
var rectangle = new newRecta(110, 75);
rectangle.draw();

// Function constructor
// How function an object in JavaScript
function simple() {
    console.log('I am function');
}

console.log(simple.name, simple.length);

var init = new Function('width', 'height', `this.width = width
    this.height = height

    this.draw = function () {
        console.log('I am a rectangle');
        this.print()
    }

    this.print = function () {
        console.log('My width is ' + this.width);
        console.log('My height is ' + this.height);

    }`
)
var initial = new init(256, 128)
console.log(initial);

// Call,Apply method
function newFunction(c, d) {
    console.log(this);
    console.log(this.a + this.b + c + d);
}
newFunction()
newFunction.call({ a: 10, b: 20 }, 5, 6) /* Call method */
newFunction.apply({ a: 10, b: 20 }, [5, 6]) /* Apply method */

// Bind method
var myBind = newFunction.bind({ a: 10, b: 12 })
myBind(5, 3)
