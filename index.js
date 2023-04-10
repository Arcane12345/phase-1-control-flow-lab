function scuberGreetingForFeet(someValue){
  if (someValue <= 400){
    return "This one is on me!"
  }
 
  else if (400 < someValue && someValue< 2000) {
    return "That will be twenty bucks."
  }

  else if (2000 <= someValue && someValue < 2500) {
    return "I will gladly take your thirty bucks."
  }
  
  else (someValue > 2500) ;{
    return "No can do."
  }
}

function ternaryCheckCity(city){
  if (city === "NYC"){
    return "Ok, sounds good."
  }
  else return "No go."
}

function switchOnCharmFromTip(generousness){
  if(generousness === "generous"){
    return "Thank you so much."
  }
  else if (generousness === "not as generous"){
    return "Thank you."
  }
  else return "Bye."
}