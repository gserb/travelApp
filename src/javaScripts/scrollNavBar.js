function scrollNavBar() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementsByClassName('nav-bar').style.padding = '30px 10 px';
    document.getElementsByClassName('logo').style.fontSize = '25px';
  } else {
    document.getElementsByClassName('nav-ba').style.padding = '80px 10px';
    document.getElementsByClassName('logo').style.fontSize = '35px';
  }
}
