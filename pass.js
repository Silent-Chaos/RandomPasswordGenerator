const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let PassBtn=document.getElementById("pass-btn")
let passw1=document.getElementById("passa")
let passw2=document.getElementById("passb")
let length=15
let DD=document.getElementById("dropdown")
let    seven     = document.getElementById("sev")
let    eight= document.getElementById("eig")
let    nine     = document.getElementById("nin")
let    TEN     = document.getElementById("ten")
let   eleven      = document.getElementById("ele")
let    twelve     = document.getElementById("twe")
let       thirteen  = document.getElementById("thi")
let         fourteen= document.getElementById("fou")
let         fifteen= document.getElementById("fif")

function racar(){
let randchar=Math.floor(Math.random()*characters.length)

return characters[randchar]

}
function genranpass(){
    let randompassword=" "
    for(let i=0;i<length;i++)
{
        randompassword+=racar()
}
    return randompassword
}
 
function genpass2() 
{
    let randompassword1=" "
    for(let i=0;i<length;i++)
{
        randompassword1+=racar()
}
    return randompassword1
}


PassBtn.addEventListener('click',function(){
    let randpassword1=genranpass()
    let randpassword=genranpass()


    passw1.textContent=randpassword
    passw2.textContent=randpassword1

})