import './App.css';
import Card from './Components/Card';
import Avatar from './Components/Avatar';

function App() {
  return (
    <div className="App">
      <h1 className='heading'>My Favorite Games</h1>
      <Card 
      name={games[0].name}
      img={games[0]}
      consoles={games}
      />
      <Card 
      name=''
      img=''
      consoles=''
      />
      <Card
      name=''
      img=''
      consoles='' 
      />
    </div>
  );
}

export default App;
