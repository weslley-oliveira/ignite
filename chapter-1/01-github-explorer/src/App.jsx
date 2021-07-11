import { RepositoryList } from './components/RepositoryList'
import './styles/global.scss'

export function App() {
    return (
        <div className="container">
            <h1>Github Explorer</h1>
            <RepositoryList/>
        </div>
    )
}