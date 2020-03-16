
var n= 1;
function takeANumber(katzDeliLine){
    //katzDeliLine.push(namePerson);
   // for (let i = katzDeliLine.length + 1; i > 0; i++) {
  //    return `Welcome, ${namePerson}. You are number ${i - 1} in line.`;
  //  }


katzDeliLine.push (n);
  for (let i = katzDeliLine.length + 1; i > 0; i++) {
    return `Welcome, ${i}  You are number ${i - 1} in line.`;
} 
n++


<<<<<<< HEAD
function currentLine(katzDeliLine) {
  var i =0;
   if (katzDeliLine.length === 0) {
    return `The line is currently empty.`;
  } 
  else {
   return `The line is currently: ${i+1}. ${katzDeliLine[i]}, ${i+2}. ${katzDeliLine[i+1]}, ${i+3}. ${katzDeliLine[i+2]}`;
    
=======
function currentLine(line) {
  if (line.length === 0) {
    return `The line is currently empty.`;
  } 
  else {
    for (let i = line.length + 1; i>0; i++ )
    return `The line is currently: 1. ${line[i]}`;
>>>>>>> d6dceea8a440d71fabba0976728340ff636ac7d7
  }
}


<<<<<<< HEAD
function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift() + ".";
  } else {
  var string = `There is nobody waiting to be served!`;
  return string;
  }
}


=======


//function takeANumber(currentLine,newPersin) {
  //var n = []
//  for (let i = 0; i <7; i+=1) {
  // n.push(`Welcome, ${newPersin[i]}. You are number ${i+=1}`);
//}
//return n}
>>>>>>> d6dceea8a440d71fabba0976728340ff636ac7d7
