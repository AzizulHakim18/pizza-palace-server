import React from 'react';
import { Link } from 'react-router-dom';
import './HomeBanner.css'

const HomeBanner = () => {
    return (
        <div>
            <section class="home-section">
                <div class="home-section-content">
                    <h1 className='lg:font-extrabold md:font-bold sm:font-semibold text-rose-700'>Delicious Pizza Delivered to Your Door</h1>
                    <p className='bold'>Order now and get your favorite pizza delivered straight to your door within 30 minutes.</p>

                    <div>
                        <span class="order-mouse">
                            <span class="move"></span>
                        </span>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default HomeBanner;