import React, {useState} from "react";

const SearchBar = ({onTermSubmit}) => {

    const [term, setTerm] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();
        onTermSubmit(term);
    }

    return (
        <div className={"search-bar ui segment"}>
            <form onSubmit={onFormSubmit} className={"ui form"}>
                <label>Búsqueda de vídeos:</label>
                <input
                    type="text"
                    value={term}
                    onChange={event => setTerm(event.target.value)}
                />
            </form>
        </div>
    );

}

export default SearchBar;
