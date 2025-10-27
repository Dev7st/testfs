const Button = () => {

	return (
		<button onClick={() => {
			alert("good");
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