import React, { useEffect, useState, useRef } from "react";
import { getData } from "../../MovieListAPI/getData.js";
import { MagnifyingGlass } from "@phosphor-icons/react";
import FetchedDataItems from "./FetchedDataItems.jsx";

const FetchedData = () => {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    const input = useRef(null);

    useEffect(() => {
        getData().then((res) => {
            setData(res);
            setFilteredData(res);
        });
    }, []);

    const handleSearch = () => {
        if (query.trim() === "") {
            setFilteredData(data);
        } else {
            setFilteredData(
                data.filter((product) => {
                    return product.original_title.toLowerCase().includes(query.toLowerCase());
                })
            );
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch();
    };

    const handleKeyPress = (e) => {
        if ((e.key === "Enter" || e.type === "click") && query.trim() !== "") {
            handleSearch();
        } else if ((e.key === "Enter" || e.type === "click") && query.trim() === "") {
            setFilteredData(data);
        }
    };
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
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyPress}
                />
                <button
                    className="search-button"
                    onClick={handleSubmit}
                >
                    <MagnifyingGlass size={25} weight="bold" color="#ec7532" />
                </button>
            </div>
            <div className="all-films-data-container">
                {filteredData.map((product) => (
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
