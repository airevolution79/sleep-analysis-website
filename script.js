var menuBtn = document.getElementById('menuBtn');
var sidebar = document.getElementById('sidebar');

menuBtn.onclick = function( ){
  if (sidebar.className.indexOf('open') === -1){
    sidebar.className = sidebar.className + ' open';
  } else {
    sidebar.className = sidebar.className.replace(' open','');
  }
}

var links = document.getElementsByClassName('navlink');
for(var i = 0; i < links.length; i++){
  links[i].onclick = function(){
    if(sidebar.className.indexOf('open') !== -1){
      sidebar.className = sidebar.className.replace(' open','');
    }
  };
}
