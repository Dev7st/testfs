const Button = () => {
	function handleClick(){
		alert("Hello");
	}

	return (
		<button onClick={handleClick}>클릭</button>
	)
}

function App() {

  return (
	<>
		<Button></Button>
	</>
  );
}

export default App;