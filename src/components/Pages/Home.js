import React from 'react';
import BgHeader from "../Home/BackgroundHeader";
import About from "../Home/About";
import News from "../Home/News";
import Blog from "../Home/Blog";
import Quick from "../Home/Quick";
import KeyFeature from "../Home/KeyFeature";
import Team from "../Home/Team";
import Contact from "../Home/Contact";
import $ from 'jquery';

const Home = () => {
    $('.active').removeClass('active');
    $('#home').addClass('active');
    return (
        <div>
            <BgHeader />
            <About />
            <News />
            <Blog />
            <Quick />
            <KeyFeature />
            <Team />
            <Contact />
        </div>
    );
};

export default Home;