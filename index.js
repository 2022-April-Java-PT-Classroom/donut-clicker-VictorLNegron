
import DonutMaker from "./DonutMaker";




renderPage();

function renderPage() {
  addDonutz();
  addAutoclicker()
}





function addDonutz(){
  var numDonuts = 0;
  numDonuts += 1;

}
function addAutoclicker(){
  if(this.numDonuts >= 100){
  this.numDonuts -= 100;
  this.numAutoclickers += 1;
} else if (this.numAutoclickers >=1){
  this.numDonuts *2;
}
}
function addBaker(){
  if(this.numDonuts >= 1000) {
      this.numDonuts -= 1000;
      this.numBakers += 1;
  }
}





export default DonutMaker;
