const surface = document.querySelector("#surface");
surface.style.width = "500px";
surface.style.height = "500px";

let num = 64;
//let num = parseInt(prompt("Enter a number from 2-100"));
let count = 1;

let size = (500 / num) + "px";
console.log(size);

let sColor = "black";

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

    const red = document.querySelector("#red");
    red.addEventListener("click", () => {
        sColor = "red";
    });

    const blue = document.querySelector("#blue");
    blue.addEventListener("click", () => {
        sColor = "blue";
    });

    const green = document.querySelector("#green");
    green.addEventListener("click", () => {
        sColor = "green";
    });

    const yellow = document.querySelector("#yellow");
    yellow.addEventListener("click", () => {
        sColor = "yellow";
    });

    const white = document.querySelector("#white");
    white.addEventListener("click", () => {
        sColor = "white";
    });

    const black = document.querySelector("#black");
    black.addEventListener("click", () => {
        sColor = "black";
    });

    color.forEach((colors) => {
        colors.addEventListener("mouseover", () => {
            colors.style.backgroundColor = sColor;
        });
    });
    
}
function generator(number) {
    num = number;
    size = (500 / num) + "px";
    document.querySelectorAll(".square").forEach(el => el.remove());
    gen(num);
}

const eight = document.querySelector("#eight");
eight.addEventListener("click", () => {
    generator(8);
});

const sixteen = document.querySelector("#sixteen");
sixteen.addEventListener("click", () => {
    generator(16);
});

const thirtytwo = document.querySelector("#thirtytwo");
thirtytwo.addEventListener("click", () => {
    generator(32);
});

const twentyfour = document.querySelector("#twentyfour");
twentyfour.addEventListener("click", () => {
    generator(24);
});


gen(num);