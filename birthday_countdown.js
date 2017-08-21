function countdown(num){

  for(var i = num; i > 0; i--){
    if(num > 30){
      console.log([i] + " " + "Days remaining..." + " " + "So far away...");

    }
    else if(num < 5){
      console.log([i] + " " + "Days remaining..." + " " + "IT'S ALMOST MY BIRTHDAY!!!!!!!");
    }
    else{
      console.log([i] + " " + "Days remaining..." + " " + "Getting Closer!");
    }
    num--;
  }
}

console.log(countdown(32));
