// finding largest number using map function
let n:number = Number(prompt("enter for how many numbers you want to find the sum")),
x:any = [],
largestNumber =  0;
for (let i = 0; i < n; i++) {
    let y = Number(prompt("enter number"))
    x.push(y)
}
x.map((number1:any):void => {
if (number1 > largestNumber) return largestNumber = number1
}) 
alert(largestNumber);