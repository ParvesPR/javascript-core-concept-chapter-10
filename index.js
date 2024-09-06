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
var rect = {
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
another.properties()
