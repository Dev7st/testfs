const Button = ({onAa}) => {

	return (
		<button onClick={onAa}>클릭</button>
	);
};

function App() {
	function handleClick(){
		alert("gogogo")
	}

  return (
	<>
	<Button onAa={handleClick}></Button>
	</>
  );
}

export default App;