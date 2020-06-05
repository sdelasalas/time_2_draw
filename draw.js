//create array of drawing choices
var choices = ["super_hero", "landscape", "self_portrait", "doodle", "still_life", "monster", "comic_book", "dragon", "city_scape", "a_bug", "a_bird", "big_animal", "small_animal", "human_figure", "random_design"];

//have function randomly select a drawing option
function Chooser(){
    var activity = choices[Math.floor(Math.random() * choices.length)];
    var activityWS = activity.replace("_", " ");
    return activityWS;
}
//function to run the randomizer
function Click() {
var pick = document.getElementById("display");
pick.innerHTML = "Time to Draw says: " + Chooser();
}

//create option to put three catagories together, without repeating on in any randomization
//create an array to store the random activity and then display to the user. 
function threePicker()
{
    threeChoices = [];
    while(threeChoices.length <= 2){
        var randPick = Chooser();
        if(!threeChoices.includes(randPick)){
            threeChoices.push(randPick);
            
        }
    }
    return threeChoices;
}  

function clickThree() {
    var list = document.getElementById("displayThree");
    var listItems = ""; //setting variable outside b/c forEach doesn't return anything, it just executes on each item on the list
    threePicker().forEach(element => { listItems += `<li>${element}</li>` }
    );
    
    list.innerHTML = listItems;
}  




