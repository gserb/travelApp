var navBar = document.getElementById('navBar');
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById('navBar').style.padding = '25px 10px';
  } else {
    document.getElementById('navBar').style.padding = '60px 10px;';
  }
}
