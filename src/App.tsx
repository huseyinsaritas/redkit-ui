import './App.css';
import { Button } from './components/Button/Button';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header onLogin={() => {}} onLogout={() => {}} onCreateAccount={() => {}} />
      <Button label="Click Me!" />
    </div>
  );
}

export default App;
