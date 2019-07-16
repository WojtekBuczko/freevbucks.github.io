const checkbox = document.getElementById("checkbox");
const generate = document.getElementById("button");
const nickname = document.getElementById("nickname");
generate.addEventListener("click", () => {
    if(checkbox.checked === false){
        alert("you didn't accept")   
    } else if(nickname.value == "") {
        nickname.style.color = "#fff";
        nickname.style.background = "red";
        nickname.value = "You didn't pass nickname";
    } else {
        CPABuildLock();
    }
});