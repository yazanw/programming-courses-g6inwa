//######################################################################
//###########################           SSTech       ###################
//###########################   Programming Courses  ###################
//######################################################################

let num ,num0:number;
let opreting:string;
num=parseInt(prompt("الرقم الاول"));
num0=parseInt(prompt("الرقم الثاني"));
opreting=prompt("العمليه الحسابيه");
yazan( num, num0 , opreting);
function add(num1,num2:number){
  return num1+num2;
}
  function sub(num1,num2:number){
    return num1-num2;
  
}
function multi(num1,num2:number){
  return num1*num2;
}
function div(num1,num2:number){
  if(num2==0){ return 0 }else return num1/num2 ;
}
function yazan(num1,num2:number ,opreting:string){
  let result;
  if (opreting=="+"){
    result=add(num1,num2);
  }
  else if (opreting=="-"){
    result=sub(num1,num2);
  }
  else if(opreting=="*"){
    result=multi(num1,num2);
  }
  else if(opreting=="/"){
    result=div(num1,num2);
  }
  console.log(result);
}