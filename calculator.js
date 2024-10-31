const displayContent = (data)=>{
    input.value += data
  console.log(data);
  
}

const clearData = ()=>{
    input.value =""
    input.placeholder="0"
}

const singleRemove=()=>{
  data =   input.value
  input.value = data.slice(0,-1);
}
//  const calculation = (funcn,val1,val2)=>{
//     input.value = funcn
//     switch(funcn){
//         case "add" : console.log(val1*val2);
//         break;
//         case "sub" : console.log(val1*val2);
//         break;
//     }
//  }

const showResult=()=>{
  try{
    input.value = eval(input.value)
  }
  catch(err){
   console.log(err);
    input.value=''
    input.placeholder='Invalid Expression'
  }
  finally{
    console.log('finally block');
    console.log('task completed');
    
  }
}