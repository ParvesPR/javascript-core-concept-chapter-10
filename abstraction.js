// Abstraction
// how to manually hide code from users
var abs = function (width, height) {
    var properties = {
        x: 100,
        y: 50
    }
    this.width = width
    this.height = height

    var print = function () {
        console.log('My width is ' + this.width);
        console.log('My height is ' + this.height);
    }.bind(this)
    this.first = function () {
        console.log('I am first function');
        print();
        console.log('Properties x: ' + properties.x);
        console.log('Properties y: ' + properties.y);
    }
}
// Create a new instance of 'abs' and call the 'first' method
var result = new abs(115, 75);
result.first()

