import { useState } from 'react'
import WebApp from '@twa-dev/sdk'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <p>Test deploy</p>
            <h1>Telegram Mini App</h1>
            <p>Счетчик: {count}</p>
            <button onClick={() => setCount(count + 1)}>Увеличить</button>
            <button onClick={() => WebApp.showAlert(`Текущее значение счетчика: ${count}`)}>
                Показать Alert
            </button>
        </div>
    )
}

export default App