import React from 'react';

function Tabs(props) {
    return (
        <div className="tabs" style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly", marginBottom: '30px'
        }}>
            <div style={{ padding: '20px', border: '2px solid' }}>Jobs</div>
            <div style={{ padding: '20px', border: '2px solid' }}>Saved</div>
            <div style={{ padding: '20px', border: '2px solid' }}>Applied</div>
        </div>
    );
}

export default Tabs;