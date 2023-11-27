import React, {useEffect, useState, useRef} from "react";
import {getData} from "../../MovieListAPI/getData.js";
import FetchedDataItems from "./FetchedDataItems.jsx";
import {ArrowFatRight, ArrowFatLeft} from "@phosphor-icons/react";
import "./FetchedData.scss";

const FetchedData = () => {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [page, setPage] = useState(1)

    const input = useRef(null);

    useEffect(() => {
        getData(page).then((res) => {
            setData(res);
            setFilteredData(res);
        });
    }, [page]);
    const handleNextPage = () => {
        setPage(prev => prev + 1)
    }
    const handlePrevPage = () => {
        setPage(prev => prev -1)
    }

    const handleSearch = (searchQuery) => {
        const trimmedQuery = searchQuery.trim().toLowerCase();

        if (trimmedQuery === "") {
            setFilteredData(data);
        } else {
            setFilteredData(
                data.filter((product) => {
                    return product.original_title.toLowerCase().includes(trimmedQuery);
                })
            );
        }
    };

    const handleInputChange = (e) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        handleSearch(newQuery);
    };

    return (
        <div className="all-films-content">
            <div className="all-films-heading">
                <div className="all-films-heading-item">
                    <p>ALL FILMS</p>
                </div>
            </div>
            <div className="all-films-navigation">
                <button onClick={handlePrevPage} disabled={page <= 1}><ArrowFatLeft size={32} weight="duotone"/></button>
                <button onClick={handleNextPage} disabled={page >= 41469}><ArrowFatRight size={32} weight="duotone"/></button>
            </div>
            <div className="all-films-search-container">
                <input
                    ref={input}
                    className="all-films-search-input"
                    type="text"
                    placeholder="Type to search"
                    value={query}
                    onChange={handleInputChange}
                />
            </div>
            <div className="all-films-data-container">
                {filteredData.map((product) => (
                    <FetchedDataItems
                        key={product.id}
                        {...product}
                    />
                ))}
            </div>
        </div>
    );
};

export default FetchedData;
