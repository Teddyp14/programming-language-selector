//Business Logic



//User Interface Logic
window.addEventListener("load", function () {
    const form = document.getElementById("languageQuestionnaire");
    form.addEventListener("submit", determineLanguage);
});

function determineLanguage(event) {
    event.preventDefault();
    const classPreference = document.querySelector("input[name='input1']:checked").value;
    const outdoorLove = document.querySelector("input[name='input2']:checked").value;
    const emailCheck = document.querySelector("input[name='input3']:checked").value;
    const likeGames = document.querySelector("input[name='input4']:checked").value;
    const beverage = document.querySelector("input[name='input5']:checked").value;

    console.log(classPreference);
    console.log(outdoorLove);
    console.log(emailCheck);
    console.log(likeGames);
    console.log(beverage);


    if (classPreference === "english") {
        result = "python";
    } else if (classPreference === "math" && (outdoorLove === 1 || outdoorLove === 2) && emailCheck === "constantly") {
        result = "SQL"
    }

    console.log(result)
    document.getElementById("result").innerText = result;


}