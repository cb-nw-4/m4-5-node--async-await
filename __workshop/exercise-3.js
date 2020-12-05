// Exercise 3
// ----------

const doublesLater = (num) => {
  // 1. waits 2 seconds (You could console a message here. It might make the 2 second wait easier ;)
  console.log("wait for 2 seconds");
  const result= new Promise((resolve, reject)=>{
    if(typeof num==="number"){
      setTimeout(()=>{
        resolve(num*2);
      },2000);
    }
    else{
      reject("Error: number not found.")
    }
  })

  // 2. returns the double of the num
  return result;
};

// 3. handleSum function (async/await)
const handleSum= async(num)=>{
  //let theSum=0;
  try{
    const first=await doublesLater(num);
  const second=await doublesLater(first);
  const third=await doublesLater(second);
  return third;
  }
  catch(error){
    console.log(error)
  }
}

// 4. verification
handleSum(10).then((ans) => console.log(ans));


