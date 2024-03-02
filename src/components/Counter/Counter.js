"use client"
// css property import
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import { useState } from 'react'
import './Counter.css'

const Counter = () => {

    const [scrollCounter, setScrollCounter] = useState(false)
    return (
        <div className='counter-bg-img max-w-[1200px] mx-auto '>
            <div className="counter-bg my-28 pb-[120px]">
                {/* header section */}
                <div className='pt-16 text-center mb-16'>
                    <h3 className="text-4xl font-bold">Growing</h3>
                    <h3 className="font-semibold text-3xl mt-2 text-[#F68E2D]">Exponentially</h3>
                </div>
                {/* counter section */}
                <ScrollTrigger onEnter={() => setScrollCounter(true)} onExit={() => setScrollCounter(false)}>
                    <div className="counters flex flex-wrap justify-center items-center gap-12 text-white">
                        {/* counter 1 */}
                        <div className="counter business">
                            <div>
                                <h3 className="number text-5xl font-semibold mb-2 text-center">
                                    {scrollCounter &&
                                        <CountUp start={0} end={90}>
                                        </CountUp>
                                    }
                                    %
                                </h3>
                                <p className="details text-xl font-medium">Satisfied customers</p>
                            </div>
                        </div>
                        {/* counter 2 */}
                        <div className="counter team">
                            <div>
                                <h3 className="number text-5xl font-semibold mb-2 text-center">
                                    {scrollCounter &&
                                        <CountUp start={0} end={82}>
                                        </CountUp>
                                    }
                                    +</h3>
                                <p className="details text-xl font-medium">Team Members</p>
                            </div>
                        </div>
                        {/* counter 3 */}
                        <div className="counter clients">
                            <div>
                                <h3 className="number text-5xl font-semibold mb-2 text-center">
                                    {scrollCounter &&
                                        <CountUp start={0} end={200}>
                                        </CountUp>
                                    }
                                    +</h3>
                                <p className="details text-xl font-medium">Long-Term Clients</p>
                            </div>
                        </div>
                        {/* counter 4 */}
                        <div className="counter projects">
                            <div>
                                <h3 className="number text-5xl font-semibold mb-2 text-center">
                                    {scrollCounter &&
                                        <CountUp start={0} end={30}>
                                        </CountUp>
                                    }
                                    +</h3>
                                <p className="details text-xl font-medium">Projects Done</p>
                            </div>
                        </div>
                    </div>
                </ScrollTrigger>

            </div>
        </div>
    );
};

export default Counter;