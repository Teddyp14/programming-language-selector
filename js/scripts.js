//Business Logic



//User Interface Logic

function hideResults() {
    document.getElementById("pythonResponse").setAttribute("class", "hidden");
    document.getElementById("sqlResponse").setAttribute("class", "hidden");
}

window.addEventListener("load", function () {
    const form = document.getElementById("languageQuestionnaire");
    form.addEventListener("submit", determineLanguage);
});

function determineLanguage(event) {
    event.preventDefault();

    hideResults();

    const userName = document.querySelector("input#user").value;
    const classPreference = document.querySelector("input[name='input1']:checked").value;
    const outdoorLove = document.querySelector("input[name='input2']:checked").value;
    const emailCheck = document.querySelector("input[name='input3']:checked").value;
    const likeGames = document.querySelector("input[name='input4']:checked").value;
    const beverage = document.querySelector("input[name='input5']:checked").value;
    let result;

    console.log(classPreference);
    console.log(outdoorLove);
    console.log(emailCheck);
    console.log(likeGames);
    console.log(beverage);


    if (classPreference === "english") {
        result = "Python! You'll be able write some awesome online blogs with this language!";
        document.getElementById("pythonResponse").removeAttribute("class");
    } else if (classPreference === "math" && (outdoorLove === "1" || outdoorLove === "2") && emailCheck === "constantly") {
        result = "SQL! No spreadsheet will intimdate you if you know this language!";
        document.getElementById("sqlResponse").removeAttribute("class");
    } else if (likeGames === "yes" && (outdoorLove === "3" || outdoorLove === "4" || outdoorLove === "5") && beverage === "coffee") {
        result = "C++! Get going on creating some Skyrim mods!";
    } else if (classPreference === "math" && outdoorLove === "1" && emailCheck === "never" && likeGames === "unknown" && beverage === "energyDrink") {
        result = "Binary... Godspeed.";
    } else {
        result = "JavaScript! Go look up Epicodus! "
    }

    console.log(result)
    document.getElementById("result").innerText = userName + ", " + "you should learn " + result;


}