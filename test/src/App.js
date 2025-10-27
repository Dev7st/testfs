const Button = ({message}) => {
	function handleClick(){
		alert(message);
	}

	return (
		<button onClick={handleClick}>클릭</button>
	)
}

function App() {

  return (
	<>
		<Button message = "123"></Button>
	</>
  );
}

export default App;