import React from 'react';
import { Link } from 'react-router-dom';
import './StartPage.css'
const StartPage = () => {
    return (
        <div>
            <section className='absolute  h-screen top-0 z-0'>
                <div class="scroll text1">
                    <div>
                        PIZZA <span>PALACE - </span> PIZZA <span>PALACE - </span> PIZZA <span>PALACE - </span> PIZZA <span>PALACE - </span>
                    </div>
                    <div>
                        PIZZA <span>PALACE - </span> PIZZA <span>PALACE - </span> PIZZA <span>PALACE - </span> PIZZA <span>PALACE - </span>
                    </div>
                </div>
                <div class="scroll text2">
                    <div>
                        PIZZA <span>PALACE - </span> PIZZA <span>PALACE - </span> PIZZA <span>PALACE - </span> PIZZA <span>PALACE - </span>
                    </div>
                    <div>
                        PIZZA <span>PALACE - </span> PIZZA <span>PALACE - </span> PIZZA <span>PALACE - </span> PIZZA <span>PALACE - </span>
                    </div>
                </div>
                <div class="scroll text3">
                    <div>
                        PIZZA <span>PALACE - </span> PIZZA <span>PALACE - </span> PIZZA <span>PALACE - </span> PIZZA <span>PALACE - </span>
                    </div>
                    <div>
                        PIZZA <span>PALACE - </span> PIZZA <span>PALACE - </span> PIZZA <span>PALACE - </span> PIZZA <span>PALACE - </span>
                    </div>
                </div>
                <div class="scroll text4">
                    <div>
                        PIZZA <span>PALACE - </span> PIZZA <span>PALACE - </span> PIZZA <span>PALACE - </span> PIZZA <span>PALACE - </span>
                    </div>
                    <div>
                        PIZZA <span>PALACE - </span> PIZZA <span>PALACE - </span> PIZZA <span>PALACE - </span> PIZZA <span>PALACE - </span>
                    </div>
                </div>
                <div class="scroll text5">
                    <div>
                        PIZZA <span>PALACE - </span> PIZZA <span>PALACE - </span> PIZZA <span>PALACE - </span> PIZZA <span>PALACE - </span>
                    </div>
                    <div>
                        PIZZA <span>PALACE - </span> PIZZA <span>PALACE - </span> PIZZA <span>PALACE - </span> PIZZA <span>PALACE - </span>
                    </div>
                </div>
                <div className='flex justify-center items-center'> <Link to="/home" class="mouse">Get Start</Link></div>
            </section>
        </div>
    );
};

export default StartPage;