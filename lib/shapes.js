class Circle {
    constructor() {
      this.color = "";
    }
  
    setColor(color) {
      this.color = color;
    }

    render() {
        return `<circle cx="100" cy="100" r="100" fill="${this.color}" />`;
    }
  }
  
  class Triangle {
    constructor() {
      this.color = "";
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
        return `<polygon points="100,0 200,200 0,200" fill="${this.color}" />`;
    }
  }
  
  class Square {
    constructor() {
      this.color = "";
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
        return `<rect width="200" height="200" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Circle, Triangle, Square };
  