//console.log ("hello world")
//alert("ada notifikasi")
//prompt("pinjem dulu donk")

//var promnet = "coding is easy"
//console.log (promnet)
//var promnet = "coding not easy"
//console.log (promnet)
//var promnet = " kadang gampang"
//console.log (promnet)

//let promnet = "coding bikin happy"
//console.log(promnet)
//let promnet = "coding bikin happy"
//console.log(promnet)

//const promnet = "coding kecintaan aku"
//console.log(promnet)
//const promnet = "coding bukan kecintaan aku"
//console.log(promnet)

//let totalPoin = prompt("masukan poin anda")
//if(totalPoin >= 100){
//  document.write("wuhuuuu selamat yachhh");
//}else{
// document.write("gafafah semangat");
//}

//let x = 6; 
//let y = 3;

//console.log(x<10 && y > 1);
//console.log(x<10 && y < 1);
//console.log(x==5||y==5);
//console.log(x==6||y==5);
//console.log(!(x==y));

//document.write(x<10 && y > 1);
//document.write("<br>");
//document.write(x<10 && y < 1);

// let p = document.querySelector("p")
// let button = document.querySelector("button")
// let input = document.querySelector("input")
// button.addEventListener('click', function(){
//     let isi = input.value
//     console.log(isi)
//     p.innerText = isi
// })

const inputList = document.getElementById("input-list");
const listInput = document.getElementById("list");

function tambah() {
  if (inputList.value === "") {
    alert("Jangan biarkan kosong!!!");
  } else {
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "daftar-list";
    li.appendChild(checkbox);
    let namaTugas = document.createTextNode(inputList.value);
    li.appendChild(namaTugas);

    let tombolHapus = document.createElement("button");
    tombolHapus.textContent = "x";
    tombolHapus.className = "tombol-hapus";
    li.appendChild(tombolHapus);
    listInput.appendChild(li);

    inputList.value = "";
    li.style.listStyleType = "none";
    tombolHapus.style.listStyleType = "none";

    tombolHapus.addEventListener("click", function () {
      li.remove();
    });

    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        li.style.textDecoration = "line-through";
      } else {
        li.style.textDecoration = "none";
      }
    });
  }
}



