import './App.css';
import Header from './components/header';
import Menu from './components/Menu';

function App() {
  return (
   <div>
    <Menu title="그린"/>
    <Menu title="학원"/>
    <Header color="빨강" num={1}/>
    <Header color="파랑" num={2}/>
    <Header color="녹색" num={3}/>
   </div>
  );
}

export default App;
