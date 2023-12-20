function mySet(){
 var collection = [];
 
 // this method will check for the presence of an element and return true or false
 this.has = function(){
  return (collection.indexOf(element) !== -1);
 }
 // this method will return all the value in the set
 this.value = function(){
  return collection;
 }

 this.add = function(){
  if(!this.has(element)){
   collection.push(element);
   return true;
  }
  return false;
 }

 

}