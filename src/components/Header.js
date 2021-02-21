import React from 'react';

function Header(props) {
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
                <input placeholder={"Search job by location company"} />
            </div>

            <div>
                INFINITY
            </div>
        </div>
    );
}

export default Header;