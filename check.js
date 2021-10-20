
  let val = null;

   async function getLoginFeatures() {
    try {
      setTimeout(()=>{
          console.log('hey');
           val = 25;
        },3000);
    } catch (err) {
      return null;
    }
  }


    function isValid (){
       getLoginFeatures();
      console.log('value is', val);

  }

  isValid();


  
