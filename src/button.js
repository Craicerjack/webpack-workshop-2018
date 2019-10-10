// take a str, the button label and return an element
// commonjs 
// react uses commonjs syntax

//  default export   
// module.exports = (buttonName) => {
//   return `Button: ${buttonName}`;
// } 

const makeButton = (buttonName) => `Button: ${buttonName}`;

module.exports = makeButton;
// exports.makeButton = makeButton;