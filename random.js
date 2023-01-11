function reverseSentence(){
const sentence=prompt("Enter a sentence")
const myTab=sentence.split(" ")
for (let i=myTab.length-1;i>=0;i--)
{
    console.log(myTab[i])
}
}
// reverseSentence()
/**************************************** random Joke *************************************************/
function randomJoke()
{
const joke=['joke1','joke2','joke3','joke4','joke5','joke6','joke7','joke8','joke9','joke10','joke11','joke12','joke13','joke14']
var index=Math.floor(Math.random()*13)
alert(joke[index])
}
// randomJoke()
/************************************* upperCase ************************************************************** */
function upperCase(str)
{
const upper=str.toUpperCase()
return upper
}
// let v=prompt("Enter a string value")
// console.log(upperCase(v));
/******************************************** ******************************************************************* */

function averrage(arr){
    let sum=0
    for(let i=0;i<=arr.length-1;i++)
    {
      sum+=arr[i]
    }
  let av=sum/arr.length
return av
}
// const tb=[2,80,70,19,50]
// console.log(averrage(tb))