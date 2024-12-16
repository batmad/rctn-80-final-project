/* eslint-disable react/prop-types */

import { useState } from "react";

const Search = ({ handleSearch }) => {
    const [input, setInput] = useState("");

    const handleInputChange = (event) => {
        setInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch(input)
    }

    return (
        <form className="d-flex ms-auto my-2 my-lg-0" role="search" onSubmit={handleSubmit}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={input} onChange={handleInputChange}/>
            <button className="btn btn-outline-success" type="submit">
                Search
            </button>
        </form>
    )
}

export default Search;