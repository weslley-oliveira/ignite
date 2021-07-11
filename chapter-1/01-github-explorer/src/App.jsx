import { Counter } from './components/Counter/Counter'
import { RepositoryList } from './components/RepositoryList'
import './styles/global.scss'

export function App() {
    return (
        <div className="container">
            <h1>Github Explorer</h1>
            <RepositoryList/>
            <h2>Counter</h2>
            <Counter/>
        </div>
    )
}