import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';
import Children from './components/Children';

function App() {
  const  name="홍길동";
  const footProps={
    name:"홍길동",
    location:"서울"
  }
  function handleClick(){
    console.log("함수형클릭")
  }
  const arrowClick=()=>{
    console.log("화살표함수실행")
  }
  return (
   <div>
    <Header name={name}/>
    <Body name={name} location="부산시"/>
    <Footer {...footProps}/>
    <Children>
      <div>children 컴퍼넌트</div>
    </Children>
    <button onClick={handleClick}>함수형 클릭</button>
    <button onClick={arrowClick}>화살표함수 클릭</button>
   </div>
  );
}

export default App;
