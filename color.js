
function get_color(){
let letters = '0123456789ABCDEF';
let hex = '#';
for (let i = 0; i < 6; i++) {
    hex+= letters[Math.floor(Math.random() * 16)];
    
}
document.body.style.background = hex;
document.getElementById('col').innerText = hex;
}