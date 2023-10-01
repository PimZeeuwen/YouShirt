const input1 = document.getElementById('form').elements['emailadres']
let input2 = document.getElementById('form').elements['wachtwoord']
let input3 = document.getElementById('form').elements['voornaam']
let input4 = document.getElementById('form').elements['achternaam']
let input5 = document.getElementById('form').elements['postcode']
let input6 = document.getElementById('form').elements['huisnummer']
let button = document.getElementById('button')
let lst_input = [input1, input2, input3, input4, input5, input6]

function check_form(target) {
  if (target.value === "") {
    target.style.borderColor = 'red';
    return false
} else {
    target.style.borderColor = 'black';
    return true
}}

function input_clicked(id) {
  let target = document.getElementById(id)
  target.style.borderColor = 'black'
  for (let i=0; i < lst_input.length; i++) {
    check_form(lst_input[i])
  }
}

function click_me_please() {
  let output = [];
  for (let i=0; i < lst_input.length; i++) {
    output.push(check_form(lst_input[i]))
  }
  if (output.includes(false) === false) {
    window.location.href = '../index.html'
  } else {
    
  }
}


function enter_pressed(input) {
  input?.addEventListener("keypress", function(event) {
  if (event.key === 'Enter') {
    button.click();
  }
})
}

for (let i=0; i < lst_input.length; i++) {
  enter_pressed(lst_input.i)
}
