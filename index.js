window.onload = function(){
  var lis = document.getElementsByTagName('li');
  var imgs = document.getElementsByTagName('img');
  for(var i=0;i<lis.length;i++){
    lis[i].id = i;
    lis[i].onclick = function(){
      for(var j=0;j<lis.length;j++){
        imgs[j].style.display = 'none';
      }
      imgs[this.id].style.display = 'block';
    }
  }
}
