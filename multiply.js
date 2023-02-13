let numbers=[12,10,5];
const multiply=(numbers)=>{
    var product=1;
    for(let i=0;i<numbers.length;i++)
       product=product*numbers[i];
       return product;
    }

module.exports=multiply(numbers);