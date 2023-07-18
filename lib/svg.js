class SVG {
    constructor() {
      this.text = "";
      this.textColor = "";
      this.shape = "";
    }
  
    setText(text, textColor) {
      this.text = text;
      this.textColor = textColor;
    }
  
    setShape(shape) {
      this.shape = shape;
    }
  
    render() {
      const svgCode = `
        <svg version="1.1" width="200" height="200">
            ${this.shape.render()}
          <text x="105" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
      `;
      return svgCode;
    }
  }
  
  module.exports = SVG;
  