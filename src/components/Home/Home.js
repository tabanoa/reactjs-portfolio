import React from 'react';
import './Home.css';
import Banner from 'react-js-banner';


function Home() {
    return (
        <div className="home">
           <div>
           <Banner showBanner={true} className="banner">
           <img className="img" src="https://www.creativeboom.com/uploads/articles/4a/4a6be01a52c0223c81a2dddb8dd6da8473f8ea8d_810.jpg"/>
            <div>
                <h1>Welcome!</h1>
                <h2>to my portfolio!</h2>
                <button class="btn">Resume Download</button>

            </div>
            </Banner>
           </div>
        </div>
      
    )
}

export default Home;
