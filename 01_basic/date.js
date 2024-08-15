let myDate= new Date()/*
console.log(myDate.toString())
//Thu Aug 15 2024 06:39:46 GMT+0000 (Coordinated Universal Time)


console.log(myDate.toDateString())
//Thu Aug 15 2024

console.log(myDate.toLocaleDateString())
//8/15/2024


//let mydate= new Date(2024,7,15,12,17)
//console.log(mydate.toLocaleString())*/
let myCreateDate= new Date("07-15-2024")
//console.log(myDFate.toLocaleString())

//***********Time Stamp ***********************


let myTimeStamp= Date.now()

//console.log(myTimeStamp)
//console.log(myCreateDate.getTime());//mile sec
//console.log(Date.now()/1000)// which retur float value in sec
//console.log(Math.floor(Date.now()/1000));//to convert second we wil  make it floor
 let newDate= new Date()
 //console.log(newDate.getMonth()+1)
 //console.log(newDate.getDay())
 //console.log(newDate.getFullYear())
newDate.toLocaleDateString('default',{
    day:'15',
    
})

