
/*var x = 12;*/
//var y = 5;
//var z = 10;

   // console.log(x);
   // console.log(y);
  //  console.log(z);

  // 48- les booléens

  /*var x = 5;
  var y =12;
  var mybooléens = (x>3 || y<10);

  console.log(mybooléens);*/


  // 49- les conditions
/*var speed = 90
if (speed <80) 
{
    console.log('tu roules à la bonne vitesse');
}

else if(speed < 100)
{
   console.log("tu devrais ralentir un peu");
}
else
{
   console.log("tu roule beaucoup trop vite , ralenti un peu car c'est dangereux!")
}

var favoriteColor = blue
{
   case "blue": 
      console.log("Waouh le bleu c'est magnifique");
      break;
   case "red":
      console.log("jaimerai bien une voiture rouge"); 
   default: 
      console.log("je ne connais pas ta couleur")    
}*/


// 51- Les fonctions 

/*var a =5;
var b =6;

function multiplier(number1,number2)
{
   return number1*number2;
}

var a=5;
var b=6;

result = multiplier(a,b);
console.log(result);*/

// 52 - les scopes

/*var a =5;
var b =6;
var result = multiplier(a,b)

function multiplier(number1,number2)
{
   var resultMultiplier = number1*number2;
   return resultMultiplier;
}

console.log(resultMultiplier);*/

 // 53 les arrays (tableaux)

 //déclaration et création d'un array
 /*var fruit = [ "pomme", "banane", "orange", "citron"];
 //Pour connaitre la position d'un élément
 console.log(fruit[0]);
//fonction pour rajouter un élément au tableau (array)
fruit.push("mangue")
console.log(fruit)
//"pop" fonction pour enlever un élément au tableau (array) '
console.log(fruit); /*avant le "pop" on a mangue */
//fruit.pop();
//console.log(fruit)/*apres le "pop" on a plus mangue */
//fonction "slice": Fonction selectionne sur un intervalle non inclu 
//var agrume=fruit.slice(2,4) 

//54 les Objets

//syntaxhe des objects
//var object ={
  // propertyName1: propertyValue1, // <-- il y'a le nom de la propriété et sa valeur
   //propertyName2: propertyValue2, 
   //methode1: fonction()
//};
//Exemple:
/*var dog ={
   name:"Anpaman",
   color:"white",
   age:2 
};
console.log(dog.name); // 1ere possibilité
console.log(dog)*/


//55- LES FONCTIONS CONSTRUCTEURS

function Dog(name, color, age)
{
   this.name = name;
   this.color=color;
   this.age=age;
   this.aboie= function()
   {
      console.log("wouaf " + this.name)
   };
}

var petitCaniche = new Dog("Anpaman", "white", 2);

console.log(petitCaniche);

//si je veux créer un autre chien
var grosChien = new Dog("Zeus", "black", 5);
console.log(grosChien);

petitCaniche.aboie();




