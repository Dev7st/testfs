const Button = () => {

	return (
		<button onClick={function handleClick(){
			alert("hi");
		}}>클릭</button>
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