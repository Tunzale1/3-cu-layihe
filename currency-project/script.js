const input1 = document.querySelector(".input1"); //rubl
const input2 = document.querySelector(".input2"); //usd
const input3 = document.querySelector(".input3"); //eur
const input4 = document.querySelector(".input4"); //gpb

const input5 = document.querySelector(".input5");//sag-rubl
const input6 = document.querySelector(".input6");//sag-usd
const input7 = document.querySelector(".input7");//sag-eur
const input8 = document.querySelector(".input8");//sag-gbp

const fromAmount = document.querySelector(".inpt1");
const toAmount = document.querySelector(".inpt2");

// rubldan cevirmey/////////////////////////////////

input1.addEventListener("click",newData1)
fromAmount.addEventListener('click',newData1)
toAmount.addEventListener('click',newData1)

    function newData1 () {
        
        input6.addEventListener("click",rubtousd)
         function rubtousd() {
           
            let newArea = fromAmount.value
        
            fetch(`https://api.exchangerate.host/latest?base=RUB&symbols=USD`)
            .then(res => res.json())
            .then(data => {toAmount.value = ((newArea*data.rates['USD']))})
              }
       input7.addEventListener("click",rubtoeur)
function rubtoeur() {
             let newArea = fromAmount.value
         fetch(`https://api.exchangerate.host/latest?base=RUB&symbols=EUR`)
            .then(res => res.json())
            .then(data => {toAmount.value = ((newArea*data.rates['EUR']))})
             }

       input8.addEventListener("click",rubtogbp)
 function rubtogbp() {
             let newArea = fromAmount.value
            fetch(`https://api.exchangerate.host/latest?base=RUB&symbols=GBP`)
            .then(res => res.json())
            .then(data => {toAmount.value = ((newArea*data.rates['GBP']))})     
         }

         input5.addEventListener("click",rubtorub)
        function rubtorub() {
             let newArea = fromAmount.value
         fetch(`https://api.exchangerate.host/latest?base=RUB&symbols=RUB`)
            .then(res => res.json())
            .then(data => {toAmount.value = ((newArea*data.rates['RUB']))})
             }  
        }

///////////////////sag////////////////////
input5.addEventListener("click",newData5)
fromAmount.addEventListener('click',newData5)
toAmount.addEventListener('click',newData5)


    function newData5 () {
        // input1.style.background = "#833AE0"
        input2.addEventListener("click",rub2tousd1)
         function rub2tousd1() {
           
            let newAre = toAmount.value
        
            fetch(`https://api.exchangerate.host/latest?base=RUB&symbols=USD`)
            .then(res => res.json())
            .then(data => {fromAmount.value = ((newAre*data.rates['USD']))})
            
             
         }
         input3.addEventListener("click",rub2toeur1)

         function rub2toeur1() {
            
            let newAre = toAmount.value
        
            fetch(`https://api.exchangerate.host/latest?base=RUB&symbols=EUR`)
            .then(res => res.json())
            .then(data => {fromAmount.value = ((newAre*data.rates['EUR']))})
            
             
         }

         input4.addEventListener("click",rub2togbp1)

         function rub2togbp1() {
            
            let newAre = toAmount.value
        
            fetch(`https://api.exchangerate.host/latest?base=RUB&symbols=GBP`)
            .then(res => res.json())
            .then(data => {fromAmount.value = ((newAre*data.rates['GBP']))})
            
             
         }

         input1.addEventListener("click",rub2torub1)

         function rub2torub1() {
            
             
            let newAre = toAmount.value
        
            fetch(`https://api.exchangerate.host/latest?base=RUB&symbols=RUB`)
            .then(res => res.json())
            .then(data => {fromAmount.value = ((newAre*data.rates['RUB']))})
            
             
         }
                
           
        }

// usdden cevirmey//////////////////////////////////////



input2.addEventListener("click",newData2)
fromAmount.addEventListener('click',newData2)
toAmount.addEventListener('click',newData2)

function newData2 () {
    
    input6.addEventListener("click",usdtousd)
     function usdtousd() {
     let newArea = fromAmount.value
    
        fetch(`https://api.exchangerate.host/latest?base=USD&symbols=USD`)
        .then(res => res.json())
        .then(data => {toAmount.value = ((newArea*data.rates['USD']))})
       
         
     }
     input7.addEventListener("click",usdtoeur)

     function usdtoeur() {
        
        let newArea = fromAmount.value
    
        fetch(`https://api.exchangerate.host/latest?base=USD&symbols=EUR`)
        .then(res => res.json())
        .then(data => {toAmount.value = ((newArea*data.rates['EUR']))})
        
         
     }

     input8.addEventListener("click",usdtogbp)

     function usdtogbp() {
        
        let newArea = fromAmount.value
    
        fetch(`https://api.exchangerate.host/latest?base=USD&symbols=GBP`)
        .then(res => res.json())
        .then(data => {toAmount.value = ((newArea*data.rates['GBP']))})
        
         
     }

     input5.addEventListener("click",usdtorub)

     function usdtorub() {
        
         
        let newArea = fromAmount.value
    
        fetch(`https://api.exchangerate.host/latest?base=USD&symbols=RUB`)
        .then(res => res.json())
        .then(data => {toAmount.value = ((newArea*data.rates['RUB']))})
        
         
     }
            
       
    }
//saggggggggggggggggggggggggggggggggggggggggggg//

    input6.addEventListener("click",newData6)
    fromAmount.addEventListener('click',newData6)
    toAmount.addEventListener('click',newData6)
    
    function newData6 () {
        
        input2.addEventListener("click",usd2tousd1)
         function usd2tousd1() {
         let newAre = toAmount.value
        
            fetch(`https://api.exchangerate.host/latest?base=USD&symbols=USD`)
            .then(res => res.json())
            .then(data => {fromAmount.value = ((newAre*data.rates['USD']))})
            
             
         }
         input3.addEventListener("click",usd2toeur1)
    
         function usd2toeur1() {
            
            let newAre = toAmount.value
        
            fetch(`https://api.exchangerate.host/latest?base=USD&symbols=EUR`)
            .then(res => res.json())
            .then(data => {fromAmount.value = ((newAre*data.rates['EUR']))})
            
             
         }
    
         input4.addEventListener("click",usd2togbp1)
    
         function usd2togbp1() {
            
            let newAre = toAmount.value
        
            fetch(`https://api.exchangerate.host/latest?base=USD&symbols=GBP`)
            .then(res => res.json())
            .then(data => {fromAmount.value = ((newAre*data.rates['GBP']))})
            
             
         }
    
         input1.addEventListener("click",usd2torub1)
    
         function usd2torub1() {
            
             
            let newAre = toAmount.value
        
            fetch(`https://api.exchangerate.host/latest?base=USD&symbols=RUB`)
            .then(res => res.json())
            .then(data => {fromAmount.value = ((newAre*data.rates['RUB']))})
            
             
         }
                
           
        }

// eurodan cevirmey



input3.addEventListener("click",newData3)
fromAmount.addEventListener('click',newData3)
toAmount.addEventListener('click',newData3)


function newData3 () {
    // input3.style.background = "#833AE0"
    input6.addEventListener("click",eurtousd)
     function eurtousd() {
       
        let newArea = fromAmount.value
    
        fetch(`https://api.exchangerate.host/latest?base=EUR&symbols=USD`)
        .then(res => res.json())
        .then(data => {toAmount.value = ((newArea*data.rates['USD']))})
        
         
     }
     input7.addEventListener("click",eurtoeur)

     function eurtoeur() {
        
        let newArea = fromAmount.value
    
        fetch(`https://api.exchangerate.host/latest?base=EUR&symbols=EUR`)
        .then(res => res.json())
        .then(data => {toAmount.value = ((newArea*data.rates['EUR']))})
        
         
     }

     input8.addEventListener("click",eurtogbp)

     function eurtogbp() {
        
        let newArea = fromAmount.value
    
        fetch(`https://api.exchangerate.host/latest?base=EUR&symbols=GBP`)
        .then(res => res.json())
        .then(data => {toAmount.value = ((newArea*data.rates['GBP']))})
        
         
     }

     input5.addEventListener("click",eurtorub)

     function eurtorub() {
        
         
        let newArea = fromAmount.value
    
        fetch(`https://api.exchangerate.host/latest?base=EUR&symbols=RUB`)
        .then(res => res.json())
        .then(data => {toAmount.value = ((newArea*data.rates['RUB']))})
        
         
     }
            
       
    }
//sagggggggggggggggggggggggggggggggggggggggg
input7.addEventListener("click",newData7)
fromAmount.addEventListener('click',newData7)
toAmount.addEventListener('click',newData7)


function newData7 () {
    
    input2.addEventListener("click",eur2tousd1)
     function eur2tousd1() {
       
        let newAre = toAmount.value
    
        fetch(`https://api.exchangerate.host/latest?base=EUR&symbols=USD`)
        .then(res => res.json())
        .then(data => {fromAmount.value = ((newAre*data.rates['USD']))})
        
         
     }
     input3.addEventListener("click",eur2toeur1)

     function eur2toeur1() {
        
        let newAre = toAmount.value
    
        fetch(`https://api.exchangerate.host/latest?base=EUR&symbols=EUR`)
        .then(res => res.json())
        .then(data => {fromAmount.value = ((newAre*data.rates['EUR']))})
        
         
     }

     input4.addEventListener("click",eur2togbp1)

     function eur2togbp1() {
        
        let newAre = toAmount.value
    
        fetch(`https://api.exchangerate.host/latest?base=EUR&symbols=GBP`)
        .then(res => res.json())
        .then(data => {fromAmount.value = ((newAre*data.rates['GBP']))})
        
         
     }

     input1.addEventListener("click",eur2torub1)

     function eur2torub1() {
        
         
        let newAre= toAmount.value
    
        fetch(`https://api.exchangerate.host/latest?base=EUR&symbols=RUB`)
        .then(res => res.json())
        .then(data => {fromAmount.value = ((newAre*data.rates['RUB']))})
        
         
     }
            
       
    }

        // gbpden cevirmey

input4.addEventListener("click",newData4)
fromAmount.addEventListener('click',newData4)
toAmount.addEventListener('click',newData4)


    function newData4 () {
        // rub1.style.background = "#833AE0"
        input6.addEventListener("click",gpbtousd)
         function gpbtousd() {
           
            let newArea = fromAmount.value
        
            fetch(`https://api.exchangerate.host/latest?base=GBP&symbols=USD`)
            .then(res => res.json())
            .then(data => {toAmount.value = ((newArea*data.rates['USD']))})
            
             
         }
         input7.addEventListener("click",gbptoeur)

         function gbptoeur() {
            
            let newArea = fromAmount.value
        
            fetch(`https://api.exchangerate.host/latest?base=GBP&symbols=EUR`)
            .then(res => res.json())
            .then(data => {toAmount.value = ((newArea*data.rates['EUR']))})
            
             
         }

         input8.addEventListener("click",gbptogbp)

         function gbptogbp() {
            
            let newArea = fromAmount.value
        
            fetch(`https://api.exchangerate.host/latest?base=GBP&symbols=GBP`)
            .then(res => res.json())
            .then(data => {toAmount.value = ((newArea*data.rates['GBP']))})
            
             
         }

         input5.addEventListener("click",gbptorub)

         function gbptorub() {
            
             
            let newArea = fromAmount.value
        
            fetch(`https://api.exchangerate.host/latest?base=GBP&symbols=RUB`)
            .then(res => res.json())
            .then(data => {toAmount.value = ((newArea*data.rates['RUB']))})
            
             
         } 
        }

////////////////////sag///////////////////

input8.addEventListener("click",newData8)
fromAmount.addEventListener('click',newData8)
toAmount.addEventListener('click',newData8)


    function newData8 () {
        input2.addEventListener("click",gpb2tousd1)
         function gpb2tousd1() {
           
            let newAre = toAmount.value
        
            fetch(`https://api.exchangerate.host/latest?base=GBP&symbols=USD`)
            .then(res => res.json())
            .then(data => {fromAmount.value = ((newAre*data.rates['USD']))})
            
             
         }
         input3.addEventListener("click",gbp2toeur1)

         function gbp2toeur1() {
            
            let newAre = toAmount.value
        
            fetch(`https://api.exchangerate.host/latest?base=GBP&symbols=EUR`)
            .then(res => res.json())
            .then(data => {fromAmount.value = ((newAre*data.rates['EUR']))})
            
             
         }

         input4.addEventListener("click",gbp2togbp1)

         function gbp2togbp1() {
            
            let newAre = toAmount.value
        
            fetch(`https://api.exchangerate.host/latest?base=GBP&symbols=GBP`)
            .then(res => res.json())
            .then(data => {fromAmount.value = ((newAre*data.rates['GBP']))})
            
             
         }

         input1.addEventListener("click",gbp2torub1)

         function gbp2torub1() {
            
             
            let newAre = toAmount.value
        
            fetch(`https://api.exchangerate.host/latest?base=GBP&symbols=RUB`)
            .then(res => res.json())
            .then(data => {fromAmount.value = ((newAre*data.rates['RUB']))})
            
             
         } 
        }
        
        input1.addEventListener('click', (event) => {
            event.target.style.backgroundColor = '#833AE0';
        input3.style.backgroundColor="#E5E5E5"
        input4.style.backgroundColor="#E5E5E5"
        input5.style.backgroundColor="#E5E5E5"
        input6.style.backgroundColor="#E5E5E5"
        input7.style.backgroundColor="#E5E5E5"
        input2.style.backgroundColor="#E5E5E5"
        input8.style.backgroundColor="#E5E5E5"
        });
        input2.addEventListener('click', (event) => {
            event.target.style.backgroundColor = '#833AE0';
            input3.style.backgroundColor="#E5E5E5"
        input4.style.backgroundColor="#E5E5E5"
        input5.style.backgroundColor="#E5E5E5"
        input6.style.backgroundColor="#E5E5E5"
        input7.style.backgroundColor="#E5E5E5"
        input1.style.backgroundColor="#E5E5E5"
        input8.style.backgroundColor="#E5E5E5"
        });input3.addEventListener('click', (event) => {
            event.target.style.backgroundColor = '#833AE0';
            input2.style.backgroundColor="#E5E5E5"
            input4.style.backgroundColor="#E5E5E5"
            input5.style.backgroundColor="#E5E5E5"
            input6.style.backgroundColor="#E5E5E5"
            input7.style.backgroundColor="#E5E5E5"
            input1.style.backgroundColor="#E5E5E5"
            input8.style.backgroundColor="#E5E5E5"
        });input4.addEventListener('click', (event) => {
            event.target.style.backgroundColor = '#833AE0';
            input2.style.backgroundColor="#E5E5E5"
            input3.style.backgroundColor="#E5E5E5"
            input5.style.backgroundColor="#E5E5E5"
            input6.style.backgroundColor="#E5E5E5"
            input7.style.backgroundColor="#E5E5E5"
            input1.style.backgroundColor="#E5E5E5"
            input8.style.backgroundColor="#E5E5E5"
        });input5.addEventListener('click', (event) => {
            event.target.style.backgroundColor = '#833AE0';
            input2.style.backgroundColor="#E5E5E5"
            input3.style.backgroundColor="#E5E5E5"
            input4.style.backgroundColor="#E5E5E5"
            input6.style.backgroundColor="#E5E5E5"
            input7.style.backgroundColor="#E5E5E5"
            input1.style.backgroundColor="#E5E5E5"
            input8.style.backgroundColor="#E5E5E5"
        });input6.addEventListener('click', (event) => {
            event.target.style.backgroundColor = '#833AE0';
            input2.style.backgroundColor="#E5E5E5"
            input3.style.backgroundColor="#E5E5E5"
            input5.style.backgroundColor="#E5E5E5"
            input4.style.backgroundColor="#E5E5E5"
            input7.style.backgroundColor="#E5E5E5"
            input1.style.backgroundColor="#E5E5E5"
            input8.style.backgroundColor="#E5E5E5"
        });input7.addEventListener('click', (event) => {
            event.target.style.backgroundColor = '#833AE0';
            input2.style.backgroundColor="#E5E5E5"
            input3.style.backgroundColor="#E5E5E5"
            input5.style.backgroundColor="#E5E5E5"
            input6.style.backgroundColor="#E5E5E5"
            input4.style.backgroundColor="#E5E5E5"
            input1.style.backgroundColor="#E5E5E5"
            input8.style.backgroundColor="#E5E5E5"
        });input8.addEventListener('click', (event) => {
            event.target.style.backgroundColor = '#833AE0';
            input2.style.backgroundColor="#E5E5E5"
            input3.style.backgroundColor="#E5E5E5"
            input5.style.backgroundColor="#E5E5E5"
            input6.style.backgroundColor="#E5E5E5"
            input7.style.backgroundColor="#E5E5E5"
            input1.style.backgroundColor="#E5E5E5"
            input4.style.backgroundColor="#E5E5E5"
        })

