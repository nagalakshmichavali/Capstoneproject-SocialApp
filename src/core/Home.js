import React from 'react';

import Posts from '../post/Posts';

const Home = () => (
    <>
        <div className="container">
            <Posts />
        </div>
        <footer className="page-footer font-small" style={{ background: "#3E4551" }}>
            <div className="container">
                <p className="text-center" style={{ color: "#fff", fontSize: "large", margin: "0", padding: "20px" }}>
                    <i>Made with <i className="fas fa-heart" style={{ color: "red", fontSize: "24px" }}></i> by
                        Naga </i>
                </p>
            </div>
        </footer>
    </>
);

export default Home;