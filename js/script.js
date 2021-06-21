// Change colorschemes with button
let root = document.documentElement;

let colors = {
  "--bg_color": ["#F9FFEF", "#52966F", "#556573"],
  "--text_color": ["#260101", "#00145E", "#F2E0D5"],
  "--link_color": ["#B28049", "#FD9A02", "#BF8275"],
  "--link_hover_color": ["#5B5547", "#C79186", "#F2A488"],
  "--link_active_color": ["black", "black", "black"],
  "--link_current_page_color": ["#465E73", "#1D5224", "#101A26"]
};
let colorscheme = 0;

let i;
let colorbtn = document.getElementsByClassName("colorscheme")[0];
colorbtn.onclick = function() {
  colorscheme++;
  cs_index = colorscheme % 3;
  for (const [key, value] of Object.entries(colors)) {
    root.style.setProperty(key, value[cs_index]);
  }
  localStorage.setItem("colorscheme",colorscheme);
}

window.onload = function() {
  try {
    colorscheme = localStorage.getItem("colorscheme");
    cs_index = colorscheme % 3;
    console.log(colorscheme);
    for (const [key, value] of Object.entries(colors)) {
      root.style.setProperty(key, value[cs_index]);
    }
  } catch(err) {
    colorscheme = 0;
  }
}
