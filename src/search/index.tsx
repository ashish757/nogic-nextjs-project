import React from "react";
import { useParams } from "react-router";
import './styles.css';
import NoteList from "../noteList/noteList";

const SearchResults: React.FunctionComponent<any> = () => {

    const param = useParams()
    return (
        <main className="center">
            <h1>
                {param.query}
            </h1>
                <NoteList search query={param.query} />
        </main>
    )
}

export default SearchResults;