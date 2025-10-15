const numbers = [1,2,3,4,5,6];

const result = numbers.filter((number,index,array)=>{
	console.log(index);
	console.log(array);
	return number > 3;
});

console.log(result);