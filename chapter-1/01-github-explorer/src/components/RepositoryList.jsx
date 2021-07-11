import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name:'First repo',
    description: 'Nice repo using next js',
    link: 'http://github.com'
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h2>Repository List</h2>
            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    )    
}