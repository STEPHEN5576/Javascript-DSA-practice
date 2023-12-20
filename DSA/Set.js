function mySet(){
 var collection = [];
 
 // this method will check for the presence of an element and return true or false
 this.has = function(){
  return (collection.indexOf(element) !== -1);
 }
 // this method will return all the values in the set
 this.values = function(){
  return collection;
 }

 this.add = function(){
  if(!this.has(element)){
   collection.push(element);
   return true;
  }
  return false;
 }

 this.remove = function(){
  if(this.has(element)){
   index = collection.indexOf(element);
   collection.splice(index,1);
   return true;

  }
  return false;
 }

 this.size = function(){
  return  collection.length;
 }
 // this method will return the union of two sets

 this.union = function(otherSet){
  var unionSet = new mySet();
  var firstSet = this.values();
  var SecondSet = otherSet.values();
  firstSet.forEach(function(e){
   unionSet.add(e)
  });
  SecondSet.forEach(function(e){
   unionSet.add(e);
  });
  return unionSet;
 };

 this.intersection = function(otherSet){
  var intersectionSet = new mySet();
  var firstSet = this.values();
  firstSet.forEach(function(e){
   if(otherSet.has(e)){
    intersectionSet.add(e);
   }
  }) ;
  return intersectionSet;
 }
 // this method will return the difference of two sets as a new set

 this.difference = function(otherSet){
  var differenceSet = new MySet();
  var firstSet = this.values();
  firstSet.forEach(function(e){
   if(!otherSet.has(e)){
    differenceSet.add(e);
   }
  });
  return differenceSet;
 }








}