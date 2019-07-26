document.getElementById("btn1").addEventListener("click", myName)
document.getElementById("btn2").addEventListener("click", mySchool)
document.getElementById("btn3").addEventListener("click", myCareer)
document.getElementById("btn4").addEventListener("click", myHobbies)


function myName() {
    document.getElementById("name").innerHTML = "NAME TEXT GOES HERE";
}

function mySchool() {
    document.getElementById("school").innerHTML = "SCHOOL INFO GOES HERE";
}

function myCareer() {
    document.getElementById("career").innerHTML = "CAREER INFO GO HERE";
}

function myHobbies() {
    document.getElementById("hobbies").innerHTML = "HOBBIES GO HERE";
}