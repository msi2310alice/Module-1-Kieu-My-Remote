let inputa;
let inputb;
inputa = prompt("Nhập a");
inputb = prompt("Nhập b");
let a = parseInt(inputa);
let b = parseInt(inputb);


let c = Math.floor(Math.random()*(b-a+1))+a;
document.write("số nguyên ngẫu nhiên từ " + a +"+1" + " đến " + b + ": " + c );
document.write("<br/>");