var overlay = document.querySelector(".overlay");
var popupbox = document.querySelector(".popup");
var plusbtn = document.getElementById("plus-btn");
plusbtn.addEventListener("click",function(){
    overlay.style.display="block";
    popupbox.style.display="block";
});

var cancelbtn = document.getElementById("cancel");
cancelbtn.addEventListener("click",function(){
    overlay.style.display="none";
    popupbox.style.display="none";
});

var outputcon = document.querySelector(".output-con");
var booktitle = document.getElementById("book-title");
var bookauthor = document.getElementById("book-author");
var bookdesc = document.getElementById("book-desc");
var addbtn = document.getElementById("add");
addbtn.addEventListener("click",function(){
    var div = document.createElement("div");
    div.setAttribute("class","box");
    div.innerHTML=`<h2>${booktitle.value}</h2>
                <h4>${bookauthor.value}</h4>
                <p>${bookdesc.value}</p>
                <button onclick="del(event)">Delete</button>`;
    outputcon.append(div);
    overlay.style.display="none";
    popupbox.style.display="none";
});
function del(event){
    event.target.parentElement.remove();
}