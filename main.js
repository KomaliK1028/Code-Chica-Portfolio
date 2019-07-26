document.getElementById("btn1").addEventListener("click", myName, { once: true })
document.getElementById("btn2").addEventListener("click", mySchool, { once: true })
document.getElementById("btn3").addEventListener("click", myCareer, { once: true })
document.getElementById("btn4").addEventListener("click", myHobbies, { once: true })

var h;

function myName() {
 h = document.getElementById("btn1");
 h.insertAdjacentText("afterend", "Hi! My name is Komali Kosaraju!");
 
}

function mySchool() {
    h = document.getElementById("btn2"); 
    h.insertAdjacentText("afterend", "I just finished 8th grade at Walsh Middle School. I am excited to be a freshman at Round Rock High School. Some classes I am excited to take are Pre-AP Computer Science, and Choir. Some clubs I am excited to participate in are Speech and Debate. ");

}

function myCareer() {
    h = document.getElementById("btn3"); 
    h.insertAdjacentText("afterend", "Careers that I would like to see myself in is a computer engineer, or a computer programmer. I would like to get there by going to UT Austin with a major in Computer Science and Engineering.");
    
}

function myHobbies() {
    h = document.getElementById("btn4"); 
    h.insertAdjacentText("afterend", "Some of my hobbies are reading YA novels, listening to music, and I enjoy taking Tae Kwon Do classes. ");

}