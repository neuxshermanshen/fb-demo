// 接受 function 作為參數

function high(lowFunc){
  lowFunc();
}

function low(){
  console.warn(123);
}

high(low);

// 返回另一個 function

function low2(text){
  console.warn(text);
}

function high2(){
  return low2;
}

high2()(456);