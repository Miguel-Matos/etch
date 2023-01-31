const surface = document.querySelector("#surface");
surface.style.width = "500px";
surface.style.height = "500px";

let num = 64;
//let num = parseInt(prompt("Enter a number from 2-100"));
let count = 1;

let size = (500 / num) + "px";
console.log(size);



function gen (amount) {
    for (let i = 0; i < amount; i++) {
        for (let j = 0; j < amount; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            
            square.style.height = size;
            
            //square.textContent = count;
            surface.appendChild(square);
            count++;
            
        }
    }
    const color = document.querySelectorAll(".square");

    color.forEach((colors) => {
        colors.addEventListener("mouseover", () => {
            colors.style.backgroundColor = "black";
        });
    });
    
}


gen(num);