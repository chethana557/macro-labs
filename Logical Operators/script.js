const hasDriverslicence=true;
const hasGoodvision=false;

console.log(hasDriverslicence && hasGoodvision);
console.log(hasDriverslicence || hasGoodvision);
console.log(!hasDriverslicence);

const shouldDrive=hasDriverslicence && hasGoodvision;

if(shouldDrive){
    console.log("Sarh is able to drive")
}else 
console.log("someone cant drive")

const istired=true;
console.log(hasDriverslicence && hasGoodvision && istired);