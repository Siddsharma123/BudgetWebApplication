/*
class top > input-bud-amount ,input-bud-submit
*/ 
// budget  validation 
function budFormValidation(){
    var amount=document.getElementById("input-bud-amount").value;
    var regEx=/^([1-9])([0-9]){0,7}$/;
    if(regEx.test(amount)){
       calculate(amount);
    }else{
        alert("Invalid Budget Amount Please Enter correct Amout..");
    }
    document.getElementById("input-bud-amount").value="";
}
// expense form validation
//class bottom > form > input-exp-amount ,input-exp-title, input-exp-submit
function expFormValidation(){
     var title=document.getElementById("input-exp-title").value;
     var amount=document.getElementById("input-exp-amount").value;
     var regEx1=/^[A-Z a-z]{2,15}$/;
     var regEx2=/^([1-9])([0-9]){0,7}$/;
     if(regEx1.test(title) && regEx2.test(amount)){
        addExpenseAmount(amount);
        addExpenseTitle(title,amount);
     }else{
         alert("Please enter correct Expense or Correct expence Amount:-");
     }
     document.getElementById("input-exp-title").value="";
     document.getElementById("input-exp-amount").value="";
}

// add budget through calculate x=input-bud-amount complete
function calculate(x){
 var num=parseInt(x);
 var oldBud=document.getElementById("buDget-Amt");
 var oldExp=document.getElementById("exPense-Amt");
 var oldBal=document.getElementById("baLance-Amt");
 var newBud=parseInt(oldBud.innerHTML)+num;
 var newExp=parseInt(oldExp.innerHTML);
 var newBal=parseInt(oldBal.innerHTML)+num;
 putValues(newBud,newExp,newBal);
}

// and expense amount amd expense title
function addExpenseAmount(x){
    var num=parseInt(x);
    var oldBud=document.getElementById("buDget-Amt").innerHTML;
    var oldExp=document.getElementById("exPense-Amt").innerHTML;
    var newBud=parseInt(oldBud);
    var newExp=parseInt(oldExp)+num;
    var newBal=newBud-newExp;
    putValues(newBud,newExp,newBal);
}

function addExpenseTitle(x,y){
  var titleOld=document.getElementById("exp-show-title");
  var valueOld=document.getElementById("exp-show-value");
  var strTitleOld=titleOld.innerHTML;
  var strValueOld=valueOld.innerHTML;
  var newTitleOld=strTitleOld+"- "+x+"<br>";
  var newValueOld=strValueOld+"- "+y+" $<br>";
  titleOld.innerHTML=newTitleOld;
  valueOld.innerHTML=newValueOld;
}

// buDget-Amt exPense-Amt baLance-Amt  put values complete----
function putValues(x,y,z){
    document.getElementById("buDget-Amt").innerHTML = x;
    document.getElementById("exPense-Amt").innerHTML = y;
    document.getElementById("baLance-Amt").innerHTML = z;
}




