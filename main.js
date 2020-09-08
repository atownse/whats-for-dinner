var sides = [
    "Garden Salad", 
    "Crispy Potatoes", 
    "Sweet Potato Tots", 
    "Coconut Rice", 
    "Caesar Salad", 
    "Shrimp Summer Rolls", 
    "Garlic Butter Mushrooms",
    "Nachos",
    "Mashed Potatoes",
    "Egg Rolls"]

var mainDishes = [
    "Pineapple Chicken", 
    "Shakshuka", 
    "Thai Yellow Curry", 
    "Bibmbap", 
    "Shrimp Alfredo Fettucine", 
    "Chicken Parmesean",  
    "BBQ Chicken Burgers", 
    "Ramen", 
    "Empanadas", 
    "Chicken Fried Rice", 
    "Sheet Pan Fajitas", 
    "Margarita Pizza",
    "Shrimp Creole",
    "Paella",
    "Beef Fajitas",
    "Jumbalaya"]

var desserts = [
    "Brownies",
    "Faerie Bread",
    "Chocolate Shake",
    "Chocolate Chip Cookies", 
    "Black Forest Cake", 
    "Banana Bread", 
    "Best Chocolate Cake Ever", 
    "Cheesecake", 
    "Funfetti Cake", 
    "Baklava", 
    "Flan", 
    "Macarons", 
    "Macaroons", 
    "Chocolate Cupcakes", 
    "Pavlova", 
    "Key Lime Pie", 
    "Tart Tatin", 
    "Croissants", 
    "Eclairs"]

// DOM Elements
letsCookButton = document.querySelector(".cook-button")
resultFood = document.getElementById("result-text")
clearButton = document.querySelector(".empty-out")
addButton = document.querySelector(".button")
newRecipeButton = document.getElementById("new-addition")

// Event Listeners
letsCookButton.addEventListener("click", generateRandomFood)
clearButton.addEventListener("click",displayCookPot)
addButton.addEventListener("click", displayCreateDish)
newRecipeButton.addEventListener("click", addNewRecipe)

// Functions
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }
function changeDisplay() {
    document.querySelector(".start").classList.add("hidden")
    document.querySelector(".results").classList.remove("hidden")
}

function displayCookPot() {
    document.querySelector(".start").classList.remove("hidden")
    document.querySelector(".results").classList.add("hidden")
    clearRadio()
}

function clearRadio() {
    document.querySelector('#side').checked = false
    document.querySelector('#main-dish').checked = false
    document.querySelector('#dessert').checked = false
    document.querySelector('#entire-meal').checked = false
}

function generateRandomFood() {
    if (document.getElementById("side").checked) {
        resultFood.innerText = `${sides[getRandomIndex(sides)]}!`
        changeDisplay()
    } else if (document.getElementById("main-dish").checked) {
        resultFood.innerText = `${mainDishes[getRandomIndex(mainDishes)]}!`
        changeDisplay()
    } else if (document.getElementById("dessert").checked) {
        resultFood.innerText = `${desserts[getRandomIndex(desserts)]}!`
        changeDisplay()
    } else if (document.getElementById("entire-meal").checked) {
        resultFood.innerText = `${mainDishes[getRandomIndex(mainDishes)]} with a side of ${sides[getRandomIndex(sides)]} and ${desserts[getRandomIndex(desserts)]} for dessert!`
        changeDisplay()
    }
}

function displayCreateDish() {
    document.querySelector(".own-recipe").classList.toggle("hidden")
}

function addNewRecipe() {
    var newRecipeName = document.getElementById("recipe-name")
    var newRecipeType = document.getElementById("recipe-type").selectedIndex
    var optionHTML = document.getElementsByTagName("option") 
    if (optionHTML[newRecipeType].value === "side") {
        sides.push(newRecipeName.value)
    } else if (optionHTML[newRecipeType].value === "main-dish") {
        mainDishes.push(newRecipeName.value)
    } else if (optionHTML[newRecipeType].value === "dessert") {
        desserts.push(newRecipeName.value)
    }
    resultFood.innerText = `${newRecipeName.value}!`
    changeDisplay()
    displayCreateDish()
}