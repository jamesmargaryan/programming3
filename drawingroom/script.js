function setup() {
    createCanvas(600, 600);
    background('#acacac');
}
function mouseDragged() {
    socket.emit("cords",[mouseX,mouseY]);

}
function main() {
     socket = io.connect('http://localhost:3000');
     socket.on('nkarel',drawEllipse);
     function drawEllipse(d){
         ellipse(d[0],d[1],20,20);
     }



}
window.onload = main;