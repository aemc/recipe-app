// Initialize Firebase
var config = {
  apiKey: "AIzaSyC5Z2P30RItzwibxQw7w0YWOyUJ4DJmFUQ",
  authDomain: "calor-io.firebaseapp.com",
  databaseURL: "https://calor-io.firebaseio.com",
  projectId: "calor-io",
  storageBucket: "",
  messagingSenderId: "214965186577"
};
firebase.initializeApp(config);
console.log(firebase);
// Initialize Cloud Firestore through Firebase
var ingredients, ing1;
var list_recipes = [];
var promises = [];
function onload() {
  ingredients = document.getElementById('ing');
  var recipeRef = firebase.database().ref('/recipes/');
  //nsole.log(ref);
  recipeRef.once('value').then(function (snapshot) {
    console.log(snapshot.val());
    var childData = [];
    snapshot.forEach(function (childSnapshot) {
      childData.push(childSnapshot.val());
      return childData;
    });
  }).then(function(childData){
    console.log(childData);
  });
}
const getIng = () => {}
const getIng = ()=> {
  ing1 = ingredients.value;
  console.log(ing1);
  var array_ing = ing1.split(",");
  console.log(array_ing);
  console.log(childData);
  setTimeout(function (childData){
    console.log(childData.ingredients);
  },3000);
}
var list_recipes = {
{
  "recipes" : {
  "recipe1" : {
    "allergens" : "peanut",
      "cal_count" : 295,
      "food_name" : "Burger",
      "image" : "https://bk-ca-prd.s3.amazonaws.com/sites/burgerking.ca/files/02280-9-BaconandCheeseWhopper_300x270_CR.jpg",
      "ingredients" : [ "tomato", "lettuce", "beef", "bun", "cheese" ],
      "procedure" : "Preheat an outdoor grill for high heat and lightly oil grate. In a medium bowl, whisk together egg, salt and pepper. Place ground beef and bread crumbs into the mixture. With hands or a fork, mix until well blended. Form into 4 patties approximately 3/4 inch thick. Place patties on the prepared grill. Cover and cook 6 to 8 minutes per side, or to desired doneness.",
      "sugar_count" : 4.2
  },
  "recipe2" : {
    "allergens" : "none",
      "cal_count" : 283,
      "food_name" : "Sandwich",
      "image" : "https://cdn.cpnscdn.com/static.coupons.com/ext/kitchme/images/recipes/600x400/weight-watchers-copycat-chilis-grilled-chicken_38411.jpg",
      "ingredients" : [ "bread", "tomato", "cheese", "chicken", "lettuce" ],
      "procedure" : "It's a sandwich, do you really need a recipe?",
      "sugar_count" : 3
  },
  "recipe3" : {
    "allergens" : "pinenut",
      "cal_count" : 206,
      "food_name" : "Burrito",
      "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Burrito_with_rice.jpg/1200px-Burrito_with_rice.jpg",
      "ingredients" : [ "guacamole", "lettuce", "beef", "tortilla", "cheese" ],
      "procedure" : "Preheat oven to 350 degrees F. Spray 9 x 13-inch baking dish with cooking spray and set aside. Cook beef with taco seasoning mix, according to seasoning package instructions. To prepare 1 burrito: spread ¼ cup beans down center of tortillas; top with ½ cup rice, beef, 2 tablespoons corn, and ¼ cup cheese. Fold in opposite sides of each tortilla, then roll up, burrito style. Place, seam-sides down, in prepared dish. Repeat with remaining ingredients to prepare 6 total burritos. Cover with foil and bake for 25 minutes (until heated through). If you are baking the burritos from the refrigerator while they’re still cold, it will take about 30-35 minutes for them to heat through.",
      "sugar_count" : 1.3
  }
}
}
}
list_recipes = JSON.parse(JSON.stringify(list_recipes));
console.log(list_recipes);
// list_recipes.forEach(function(element) {
//   console.log(element['0'].msg);
var counter = 0;
var ingg =childData.ingredients;
console.log('data presented');
for(var i=0; i<array_ing.length; i++){
  for(var j=0; j<list_recipes.length; j++){
    console.log(array_ing.length + " " + list_recipes.length);
    console.log(i + " " + j);
    if(array_ing[i] == ingg[j]){
      console.log(array_ing[i] + " " + ingg[j]);
      counter++;
    }
  }
  console.log(counter);
});
if(counter >= 3){
  list_recipes.push({
    name: childData.food_name,
    ingredients: childData.ingredients,
    method: childData.procedure,
    image: childData.image,
    cal_count: childData.cal_count,
    sug_count: childData.sugar_count,
    allergens: childData.allergens
  })
  console.log(list_recipes);
}
}