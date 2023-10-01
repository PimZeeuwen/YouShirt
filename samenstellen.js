let trui1 = document.getElementById('trui_wit');
let trui2 = document.getElementById('trui_zwart');
let trui3 = document.getElementById('trui_rood');
let trui4 = document.getElementById('trui_blauw');
let trui5 = document.getElementById('trui_groen');
let button = document.getElementById('trui_button');
let lst_trui_input = [trui1, trui2, trui3, trui4, trui5];
let lst_trui_clicked = [false, false, false, false, false];
let trui_info = [lst_trui_input, lst_trui_clicked];

let pet1 = document.getElementById('pet_wit');
let pet2 = document.getElementById('pet_zwart');
let pet3 = document.getElementById('pet_rood');
let pet4 = document.getElementById('pet_blauw');
let pet5 = document.getElementById('pet_groen');
let lst_pet_input = [pet1, pet2, pet3, pet4, pet5];
let lst_pet_clicked = [false, false, false, false, false];
let pet_info = [lst_pet_input, lst_pet_clicked];

let shirt1 = document.getElementById('shirt_wit');
let shirt2 = document.getElementById('shirt_zwart');
let shirt3 = document.getElementById('shirt_rood');
let shirt4 = document.getElementById('shirt_blauw');
let shirt5 = document.getElementById('shirt_groen');
let lst_shirt_input = [shirt1, shirt2, shirt3, shirt4, shirt5];
let lst_shirt_clicked = [false, false, false, false, false];
let shirt_info = [lst_shirt_input, lst_shirt_clicked];


function input_clicked(index, info) {
  let lst_input = info[0];
  let lst_clicked = info[1];
  lst_clicked.forEach(function(item, i) { 
    if (item == true) {
      lst_clicked[i] = false;
      let target = lst_input[i]
      let target_div = target.parentElement
      target_div.style.borderColor = 'transparent';
    };
  });
  lst_clicked[index] = true;
  let target = lst_input[index]
  let target_div = target.parentElement
  target_div.style.borderColor = 'black';
  info[0] = lst_input;
  info[1] = lst_clicked;
  console.log(lst_trui_clicked)
}
