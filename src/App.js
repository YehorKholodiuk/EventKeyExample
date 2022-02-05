import './App.css';
import {useState} from "react";

function App() {

  const [inputText, setInputText] = useState('');
  const [list, setList] = useState([]);

  // функция, которая обрабатывает нажатие Ентер в поле Инпут.
  // Event - тот самый объект, который создается при наступлении события.
  // Событие - действие пользователя, например, клик по кнопке, нажатие клавиши и т.п., или действие устройства (например, сработал таймер).
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addInputToList();
      setInputText('');
    }
  }

  // функция, которая добавляет введенный текст в список
  const addInputToList = () => {
    const newHistory = [...list, inputText];
    setList(newHistory)
  }

  return (
      <div className="App">
        <h1>How to call event after pressing Enter key </h1>

        <input
            onKeyDown={handleKeyDown}
            value={inputText}
            onChange={e => setInputText(e.target.value)} type="text"
        />

        <p>List:</p>
        {list.map(el => <li>{el}</li>)}
      </div>
  );
}

export default App;