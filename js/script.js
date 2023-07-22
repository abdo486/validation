var bookName = document.getElementById("bname");
var bookurl = document.getElementById("url");

var bookarr =[]


function borderColor(){
 
  var x =document.getElementById("bname");
  var y =x.value.length

  if(y<=2){
    x.style.cssText=`
    border-color: red;
    box-shadow: 0 0 0 0.25rem red;
    `

  }else{
    x.style.cssText=`
    border-color: green;
    box-shadow: 0 0 0 0.25rem green;
    `
  }
}
if(localStorage.getItem("book") != null){
  bookarr= JSON.parse(localStorage.getItem("book"));
  display()
}

function display(){
  var cart =``;
  for(var i =0;i<bookarr.length;i++){
    cart+=`
    <tr>
    <td>${i+1}</td>
    <td>${bookarr[i].bookNameValue}</td>
    <td>${bookarr[i].bookurlValue}</td>
    
    <td><a href="${bookarr[i].bookurlValue}"target="_blank"class="btn btn-primary"><i class="fa-solid fa-eye pe-2"></i> Visit</a>
    <td><button class="btn btn-danger"onclick="del(${i})"><i class="fa-solid fa-trash-can"></i> Delete</button>
    </td>
    
    </tr>
    
    `

  }
  document.getElementById("body").innerHTML=cart
}

function add(){
  var bookobj ={
    bookNameValue:bookName.value,
    bookurlValue:bookurl.value
   
  }
 


  if(checkName(bookName.value)&&checkUrl(bookurl.value)){
    bookName.value=""
    
    bookarr.push(bookobj)
    localStorage.setItem("book",JSON.stringify(bookarr));
    
    display()

  }else{
    alert("not valid book name or url")
  }
  

  
}

function del(index){
  bookarr.splice(index,1)
  display()
}



function checkName(str){
  var reg = /^[A-Za-z0-9]{3,}$/;
  return reg.test(str)

}

function checkUrl(str){
  var reg = /^https:\/\/[a-zA-Z0-9]{1,}.[a-zA-Z0-9]{2,}(\/[a-zA-Z0-9]{0,})*$/
  return reg.test(str)
}



