window.onresize = (event) => {
  const width_buttons = document.getElementById('buttons').style.width;
  const new_margin = 0.5*(width_buttons - 100);
  console.log(new_margin)
  document.getElementById('inloggen').style.margin = new_margin;
};
