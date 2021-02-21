import React, { useState } from 'react';

function Header({ setSearchQuery }) {

    const [query, setQuery] = useState('');

    const handleSearch = () => {
        setSearchQuery(query);
    }

    return (
        <div style={{
            display: 'flex',
            height: '4rem',
            backgroundColor: "#fff",
            justifyContent: "space-evenly",
            alignItems: "center",
            boxShadow: ' 0 0 5px #995',
            position: 'fixed',
            top: "0",
            width: "100%",
            zIndex: '1'
        }}>
            <div>
                BEYOND
            </div>
            <div>
                <input placeholder={"Search job by location,company"}
                    style={{
                        border: '2px solid #ffca70',
                        padding: '10px',
                        borderRadius: '10px',
                    }}
                    onKeyUp={({ key }) => {
                        if (key == 'Enter') {
                            handleSearch()
                        }
                    }}
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                    }}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div>
                INFINITY
            </div>
        </div>
    );
}

export default Header;