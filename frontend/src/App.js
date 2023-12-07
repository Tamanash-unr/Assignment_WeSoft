import './App.css';
import MainContainer from './Components/MainContainer';
import CreateUser from './Components/CreateUser';
import { useState } from "react";

function App() {
  const [showCreateWindow, setShowCreateWindow] = useState(false);

  const onCreateUser = (evt) => {
    evt.preventDefault();

    alert("form submitted")
  }

  return (
    <div className="App">
      <MainContainer showCreateWindow={setShowCreateWindow} />
      {showCreateWindow && <CreateUser onSubmit={onCreateUser} showCreateWindow={setShowCreateWindow}/>}
    </div>
  );
}

export default App;
