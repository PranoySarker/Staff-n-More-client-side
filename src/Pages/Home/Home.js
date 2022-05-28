import React from 'react';
import Banner from './Banner';
import Explore from './Explore';
import Review from './Review';
import Stay from './Stay';
import Summary from './Summary';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Summary></Summary>
            <Explore></Explore>
            <Review></Review>
            <Stay></Stay>
        </div>
    );
};

export default Home;