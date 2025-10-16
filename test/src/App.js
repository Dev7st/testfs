import logo from './logo.svg';
import './App.css';

function App() {
const isLogin = true;

  return (
    <>
		  <p>{isLogin&&"안녕하세요"}</p>
	  </>
  );
}

export default App;
