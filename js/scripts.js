function hideResults() {
    document.getElementById("pythonResponse").setAttribute("class", "hidden");
    document.getElementById("goResponse").setAttribute("class", "hidden");
    document.getElementById("cResponse").setAttribute("class", "hidden");
    document.getElementById("sqlResponse").setAttribute("class", "hidden");
    document.getElementById("javascriptResponse").setAttribute("class", "hidden");
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

    if (classPreference === "english") {
        result = "Python and take advantage of machine learning!";
        document.getElementById("pythonResponse").removeAttribute("class");
        document.getElementById("result1").innerText = userName + ", " + "you should learn " + result;
    } else if (classPreference === "math" && (outdoorLove === "1" || outdoorLove === "2") && emailCheck === "constantly") {
        result = "Go! You can work on cutting edge projects like cloud-based applications and AI development!";
        document.getElementById("goResponse").removeAttribute("class");
        document.getElementById("result2").innerText = userName + ", " + "you should learn " + result;
    } else if (likeGames === "yes" && (outdoorLove === "3" || outdoorLove === "4" || outdoorLove === "5") && beverage === "coffee") {
        result = "C++ and make some Skyrim mods!";
        document.getElementById("cResponse").removeAttribute("class");
        document.getElementById("result3").innerText = userName + ", " + "you should learn " + result;
    } else if (classPreference === "math" && outdoorLove === "1" && emailCheck === "never" && likeGames === "unknown" && beverage === "energyDrink") {
        result = "SQL! You'll be able to handle big data and wrestle any spreadsheet into submission!";
        document.getElementById("sqlResponse").removeAttribute("class");
        document.getElementById("result4").innerText = userName + ", " + "you should learn " + result;
    } else {
        result = "JavaScript! Go look up Epicodus! "
        document.getElementById("javascriptResponse").removeAttribute("class");
        document.getElementById("result5").innerText = userName + ", " + "you should learn " + result;
    }

    // document.getElementById("languageQuestionnaire").classList.add("hidden");
}