import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]) //usamos aqui a interface

    useEffect(() => {
        fetch('https://api.github.com/users/weslley-oliveira/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    },[])

    console.log(repositories)
    return (
        <section className="repository-list">
            <h2>Repository List</h2>
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository}/>
                })}                
            </ul>
        </section>
    )    
}