const btnEl = document.querySelector("button");
btnEl.addEventListener("click",()=>{
	localStorage.newData = "Hello";
	console.log(localStorage.newData);
})