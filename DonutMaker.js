class DonutMaker {
    constructor(){
        this.numDonuts = this.numDonuts;
        this.numAutoclickers=this.numAutoclickers;
        this.numBakers= this.numBakers;

    }
}


let donutDisplay = document.querySelector('.donutDisplay');
let bakerDisplay = document.querySelector('.bakerDisplay');
let autoClickerDisplay = document.querySelector('.autoClickerDisplay');
let donutCounter = document.querySelector('.donutCounter');
let buyAutoClicker = document.querySelector('.buyAutoClicker');
let buyBaker = document.querySelector('.buyBaker');
var numDonuts = 0;
var numAutoclickers = 0;
var numBakers = 0;


buyAutoClicker.addEventListener("click", function(){
    if (numDonuts >= 100 && numAutoclickers <=0 ){
        numDonuts -= 100;
        numAutoclickers += 1;
        setInterval(() => {
            document.getElementById("donut").click();
        },1000)
      }else if (numAutoclickers >= 1 && numDonuts >= 150 ){
        
        numDonuts -= 150;
        numAutoclickers += 1;
        setInterval(() => {
        document.getElementById("donut").click();
    },700); } else if (numAutoclickers >= 5 && (numDonuts >= 200 )) {
        numDonuts -= 200;
        numAutoclickers += 1;
        setInterval(() => {
        document.getElementById("donut").click();
    },500);
    }
      showNumberDonuts();
}) ;

buyBaker.addEventListener("click",()=>{
    if(numDonuts >= 500 && 1 >= numBakers){
        numDonuts -= 500;
       numBakers++;
       setInterval(() => {
        document.getElementById("donut").click();
    },100);
      }else if(numDonuts >= 600 && 1 <= numBakers){
        numDonuts -= 600;
        numBakers++;
        setInterval(() => {
            document.getElementById("donut").click();
        },90);
      } else if (numBakers <= 5 && numDonuts >= 800 ) {
        numDonuts -= 800;
        numBakers++;
        setInterval(() => {
        document.getElementById("donut").click();
    },50);
    }else if (numBakers <= 10 && numDonuts >= 1000) {
        numDonuts -= 1000;
        numBakers++;
    
    }
      showNumberDonuts();
}) ;
function showNumberDonuts(){
    donutDisplay.innerHTML = numDonuts;
    autoClickerDisplay.innerHTML = numAutoclickers;
    bakerDisplay.innerHTML = numBakers;
};
showNumberDonuts();
donutCounter.addEventListener("click",()=>{
    numDonuts++;
    showNumberDonuts();
}) ;



export default DonutMaker;