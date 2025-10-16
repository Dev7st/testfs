import './App.css';

function App() {
const isLogin = true;

  return (
    <>
		  <p className='text'>{isLogin&&"안녕하세요"}</p>
	  </>
  );
}

export default App;
