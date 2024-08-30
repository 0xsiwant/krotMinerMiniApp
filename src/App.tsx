import { useState } from 'react'
import WebApp from '@twa-dev/sdk'

function App() {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <div className="App">
            <h1 style={{ fontSize: '5rem' }}>{count}</h1>
            <div
                style={{
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    backgroundColor: '#007bff',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    fontSize: '3rem',
                    color: '#fff',
                }}
                onClick={handleClick}
            >
                Нажми!
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: '#f1f1f1',
                    padding: '1rem',
                }}
            >
                <div>Главная</div>
                <div>Профиль</div>
                <div>Настройки</div>
                <div
                    onClick={() => WebApp.showAlert(`Текущее значение счетчика: ${count}`)}
                >
                    Статистика
                </div>
            </div>
        </div>
    )
}

export default App