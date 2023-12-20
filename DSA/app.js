// check for palandrom
var letters = [];

var word = "racecar"

var rword = "";

// push the elements in the letters array for pop the element
for(var i=0; i<word.length; i++){
 letters.push(word[i]);
}

console.log(letters);
// pop the last element and assign to rword
for(var i=0; i<word.length; i++){
 rword += letters.pop();
}

console.log("rword",rword);

if(word === rword){
 console.log("It is a palandrom");
}else{
 console.log("it is not a palandrom");
}
