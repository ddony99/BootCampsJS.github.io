

let val = document.getElementById('count-el');
let btn = document.querySelector('button');
let btnSave = document.getElementById('save');
let save_el = document.getElementById('prevouis-el');

let count = 0


function addOne(){
    count += 1;
    val.innerText = "People Enterd : " + count + " Person";
}


function save() {
  
  let count_str = count + " - ";
  save_el.textContent += count_str;

  if(count == 10){
    let countZero = 0
    val.innerText = countZero + " Person";
    return count = 0;
  }
 
}

btn.addEventListener('click', function(){
  addOne()
})

btnSave.addEventListener('click', function(){

  save()
})

