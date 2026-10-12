const display = document.getElementById("displayData");

const displaydata=(value)=> {
    
    display.value += value;
}

const removeLastItem=()=> {
    display.value = display.value.slice(0, -1);
}

const clearAll=()=> {
    display.value = "";
}

const result=()=> {
  try{
    console.log("Inside Try");
    display.value=eval(display.value)
  }
  catch{
    console.log("Indise Catch");
    display.value="Invalid Expression"
    
  }
  finally{
    console.log("Action Complete");
    
  }
}