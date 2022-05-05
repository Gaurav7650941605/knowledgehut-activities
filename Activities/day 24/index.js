function myfun1(){
    var a = parseInt(document.getElementById('i1').value); 
    var b = parseInt(document.getElementById('i2').value);
    var ele =document.getElementById('ir');
    ele.innerHTML = a + b;
  
    }
    
}
function myfun2(){
    var a = parseInt(document.getElementById('i1').value); 
    var b = parseInt(document.getElementById('i2').value);
    var ele =document.getElementById('ir');
    ele.innerHTML = a - b;
}
function myfun3(){
    var a = parseInt(document.getElementById('i1').value); 
    var b = parseInt(document.getElementById('i2').value);
    var ele =document.getElementById('ir');
    ele.innerHTML = a * b;
}
function myfun4(){
    var a = parseInt(document.getElementById('i1').value); 
    var b = parseInt(document.getElementById('i2').value);
    var ele =document.getElementById('ir');
    ele.innerHTML = a / b;
}