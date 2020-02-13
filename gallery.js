function imageGallery() {
    const highlight = document.querySelector(".gallery-highlight");
    const preview = document.querySelectorAll(".photo-preview img");

    preview.forEach(preview => {
        preview.addEventListener('click', function() {
            console.log(this);
            const smallSrc = this.src;
            const bigSrc = smallSrc.replace("small", "big");
            highlight.src = bigSrc;
            console.log(bigSrc);
            // previews.forEach(preview => preview.classList.remove('photo-active'));
            preview.classList.add("photo-active");
        });
    });
}

imageGallery();

// let canvas = document.getElementById('canvas');
// let ctx = canvas.getContext('2d');
// let particlesOnScreen = 245;
// let particlesArray = [];
// let w, h;
// w = canvas.width = window.innerWidth;
// h = canvas.height = window.innerHeight;

// function random(min, max) {
//     return min + Math.random() * (max - min + 1);

// };

// function clientResize(ev) {
//     w = canvas.width = window.innerWidth;
//     h = canvas.height = window.innerHeight;
// };

// window.addEventListener("resize", clientResize);

// function createSnowFlakes() {
//     for (let i = 0; i < particlesOnScreen; i++) {
//         particlesArray.push({
//             x: Math.random() * w,
//             y: Math.random() * h,
//             opacity: Math.random(),
//             speedX: random(-11, 11),
//             speedY: random(7, 15),
//             radius: random(0.5, 4.2),



//         })
//     }
// };

// function drawSnowFlakes() {
//     for (let i = 0; i < particlesArray.length; i++) {
//         let gradient = ctx.createRadialGradient(
//             particlesArray[i].x,
//             particlesArray[i].y,
//             0,
//             particlesArray[i].x,
//             particlesArray[i].y,
//             particlesArray[i].radius
//         );
//         gradient.addColorStop(0, "rgba(255, 255, 255," + particlesArray[i].opacity + ")");
//         gradient.addColorStop(0, "rgba(210, 236, 242," + particlesArray[i].opacity + ")");
//         gradient.addColorStop(1, "rgba(237, 247, 249," + particlesArray[i].opacity + ")");

//         ctx.beginPath();
//         ctx.arc(
//             particlesArray[i].x,
//             particlesArray[i].y,
//             particlesArray[i].radius,
//             0,
//             Math.PI * 2,
//             false
//         );
//         ctx.fillStyle = gradient;
//         ctx.fill();
//     }
// };

// function moveSnowFlakes() {
//     for (let i = 0; i < particlesArray.length; i++) {
//         particlesArray[i].x += particlesArray[i].speedX;
//         particlesArray[i].y += particlesArray[i].speedY;


//         if (particlesArray[i].y > h) {
//             particlesArray[i].x = Math.random() * w * 1.5;
//             particlesArray[i].y = -50;
//         }


//     }
// };

// function updateSnowFall() {
//     ctx.clearRect(0, 0, w, h);
//     drawSnowFlakes();
//     moveSnowFlakes();
// };

// setInterval(updateSnowFall, 50);
// createSnowFlakes();


















// window.onload = function() {
//canvas init
// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");

//canvas dimensions
// var W = window.innerWidth;
// var H = window.innerHeight;
// canvas.width = W;
// canvas.height = H;

//snowflake particles
// var mp = 40; //max particles
// var particles = [];
// for (var i = 0; i < mp; i++) {
//     particles.push({
//         x: Math.random() * W, //x-coordinate
//         y: Math.random() * H, //y-coordinate
//         r: Math.random() * 4 + 1, //radius
//         d: Math.random() * mp //density
//     })
// }

//Lets draw the flakes
// function draw() {
//     ctx.clearRect(0, 0, W, H);

//     ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
//     ctx.beginPath();
//     for (var i = 0; i < mp; i++) {
//         var p = particles[i];
//         ctx.moveTo(p.x, p.y);
//         ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
//     }
//     ctx.fill();
//     update();
// }

//Function to move the snowflakes
//angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
//     var angle = 0;

//     function update() {
//         angle += 0.01;
//         for (var i = 0; i < mp; i++) {
//             var p = particles[i];
//             //Updating X and Y coordinates
//             //We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
//             //Every particle has its own density which can be used to make the downward movement different for each flake
//             //Lets make it more random by adding in the radius
//             p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
//             p.x += Math.sin(angle) * 2;

//             //Sending flakes back from the top when it exits
//             //Lets make it a bit more organic and let flakes enter from the left and right also.
//             if (p.x > W + 5 || p.x < -5 || p.y > H) {
//                 if (i % 3 > 0) //66.67% of the flakes
//                 {
//                     particles[i] = { x: Math.random() * W, y: -10, r: p.r, d: p.d };
//                 } else {
//                     //If the flake is exitting from the right
//                     if (Math.sin(angle) > 0) {
//                         //Enter from the left
//                         particles[i] = { x: -5, y: Math.random() * H, r: p.r, d: p.d };
//                     } else {
//                         //Enter from the right
//                         particles[i] = { x: W + 5, y: Math.random() * H, r: p.r, d: p.d };
//                     }
//                 }
//             }
//         }
//     }

//     //animation loop
//     setInterval(draw, 33);
// }