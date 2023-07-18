const { Circle, Square, Triangle } = require('./shapes');

describe('Circle', () => {
    test('should render a circle', () => {
        const circle = new Circle();
        circle.setColor('red');
        expect(circle.render()).toBe('<circle cx="100" cy="100" r="100" fill="red" />');
    });
});

describe('Square', () => {
    test('should render a square', () => {
        const square = new Square();
        square.setColor('blue');
        expect(square.render()).toBe('<rect width="200" height="200" fill="blue" />');
    });
});

describe('Triangle', () => {
    test('should render a triangle', () => {
        const triangle = new Triangle(); 
        triangle.setColor('green');
        expect(triangle.render()).toBe('<polygon points="100,0 200,200 0,200" fill="green" />');
    });
});