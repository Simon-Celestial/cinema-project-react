// FetchedData.jsx
import React, { useEffect, useState, useRef } from "react";
import FetchedDataItems from "./FetchedDataItems.jsx";
import { getData } from "../../MovieListAPI/getData.js";
import { MagnifyingGlass } from "@phosphor-icons/react";

const FetchedData = () => {
    const [data, setData] = useState([]);
    // const [filteredData, setFilteredData] = useState([]);
    // const [query, setQuery] = useState("");
    const input = useRef(null);

    useEffect(() => {
        getData().then((res) => {
            setData(res);
            // setFilteredData(res);
        });
    }, []);
    console.log(data)

    // useEffect(() => {
    //     if (Array.isArray(data)) {
    //         setFilteredData(
    //             data.filter((product) => {
    //                 return product.title.toLowerCase().includes(query.toLowerCase());
    //             })
    //         );
    //     }
    // }, [data, query]);

    // const handleSubmit = () => {
    //     setQuery(input.current.value);
    // };

    // const handleKeyPress = (e) => {
    //     if (e.key === "Enter" && input.current.value.trim() !== "") {
    //         handleSubmit(e);
    //     }
    // };

    return (
        <div className="all-films-content">
            <div className="all-films-heading">
                <div className="all-films-heading-item">
                    <p>ALL FILMS</p>
                </div>
            </div>
            <div className="all-films-search-container">
                <input
                    ref={input}
                    className="all-films-search-input"
                    type="text"
                    placeholder="Type to search"
                    // onChange={() => setQuery(input.current.value)}
                    // onKeyDown={handleKeyPress}
                />
                <button
                    className="search-button"
                    // onClick={handleSubmit}
                    disabled={query.trim() === ""}
                >
                    <MagnifyingGlass size={25} weight="bold" color="#ec7532" />
                </button>
            </div>
            <div className="all-films-data-container">
                {data.map((product) => (
                    <FetchedDataItems
                        key={product.id}
                        original_language={product.original_language}
                        adult={product.adult}
                        original_title={product.original_title}
                        popularity={product.popularity}
                        release_date={product.release_date}
                        overview={product.overview}
                        vote_average={product.vote_average}
                        vote_count={product.vote_count}
                        poster_path={product.poster_path}
                    />
                ))}
            </div>
        </div>
    );
};

export default FetchedData;
