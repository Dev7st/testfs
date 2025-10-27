function App() {

	return (
	  <div onClick={() => {alert("부모 요소")}}>
		  <button onClick={() => {alert("Play!")}}>
			  영화보기
		  </button>
		  <button onClick={() => {alert("Upload!")}}>
			  이미지 업로드
		  </button>
	  </div>
	);
  }
  
  export default App;