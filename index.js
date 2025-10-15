let exampleMap = new Map();

exampleMap.set("key1","value1");
exampleMap.set("key2","value2");
exampleMap.set("key3","value3");

exampleMap.forEach((value,key)=>{
	console.log(value);
	console.log(key);
})