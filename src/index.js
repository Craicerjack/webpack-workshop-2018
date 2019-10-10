import nav from "./nav";
import {top, bottom} from "./footer";
//can do this because webpack has middleware to handle it but normally cant have es module syntax and commonjs syntax
import makeButton from "./button"; 


console.log(nav()); 
console.log("top: ", top, " and bottom: ", bottom);
