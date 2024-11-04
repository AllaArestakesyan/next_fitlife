"use client"
import { useRef, useState } from 'react'

export default function Home() {
    const scrollRef = useRef<any>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const onMouseDown = (e: any) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const onMouseLeave = () => {
        setIsDragging(false);
    };

    const onMouseUp = () => {
        setIsDragging(false);
    };

    const onMouseMove = (e:any) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scroll speed by multiplying
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };
    return (
        <>
            <div className="section-1">
                <div className='section-div1'>
                    <div>
                        <span>FitLife</span> Your Pathway to Strength Health and Happiness

                    </div>
                    <div>
                        <p>
                            Explore our diverse range of workouts designed to sculpt your body and ignite your passion for fitness. Join our community and start your journey towards a healthier, stronger you today!"
                        </p>
                    </div>
                    <div>
                        <button>Start your Training</button>
                    </div>
                </div>
                <div className='section-div2'>
                    <img src="/1.png" alt="" className='img' />
                    <img src="/Slice1.png" alt="" className='img1' />
                </div>

                <img src="/Frame.png" alt="" className='im1' />
                <img src="/Frame (3).png" alt="" className='im2' />
                <img src="/Frame (1).png" alt="" className='im3' />
                <img src="/Frame (2).png" alt="" className='im4' />
                <img src="/Frame (4).png" alt="" className='im5' />
                <img src="/Frame5.png" alt="" className='im6' />
            </div>
            <div className="section-2">
                <h2>About Us</h2>
                <div>
                    <div>
                        <div>
                            <p>Empowering Wellness </p>
                            <p>Discover Our Story</p>
                        </div>
                        <p>At FitLife, we're more than just a fitness platform – we're a community dedicated to empowering individuals to live their best lives through health and wellness. Our team of experienced trainers and wellness experts are committed to providing you with top-quality content and support on your fitness journey. Whether you're a beginner or a seasoned athlete, we're here to guide and inspire you every step of the way. Join us and become part of a movement that celebrates self-improvement, resilience, and the joy of living well.</p>
                        <button>Start Workout</button>
                        <img src="/Vector 38.png" alt="" />
                    </div>
                    <div>
                        <img src="/14.jfif" alt="" />
                    </div>
                </div>
            </div>
            <div className="section-3">
                <h2>Workout</h2>
                <div
                    ref={scrollRef}
                    onMouseDown={onMouseDown}
                    onMouseLeave={onMouseLeave}
                    onMouseUp={onMouseUp}
                    onMouseMove={onMouseMove}>
                    <div>
                        <div>
                            <img src="/5.jfif" alt="" />
                        </div>
                        <div>
                            <p>
                                Revitalize Your Routine Try Our Energizing Workouts!
                            </p>
                            <img src="/lets-icons_video.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/7.jfif" alt="" />
                        </div>
                        <div>
                            <p>
                                Revitalize Your Routine Try Our Energizing Workouts!
                            </p>
                            <img src="/lets-icons_video.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/17.jfif" alt="" />
                        </div>
                        <div>
                            <p>
                                Revitalize Your Routine Try Our Energizing Workouts!
                            </p>
                            <img src="/lets-icons_video.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/18.jfif" alt="" />
                        </div>
                        <div>
                            <p>
                                Revitalize Your Routine Try Our Energizing Workouts!
                            </p>
                            <img src="/lets-icons_video.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/23.png" alt="" />
                        </div>
                        <div>
                            <p>
                                Revitalize Your Routine Try Our Energizing Workouts!
                            </p>
                            <img src="/lets-icons_video.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/22.png" alt="" />
                        </div>
                        <div>
                            <p>
                                Revitalize Your Routine Try Our Energizing Workouts!
                            </p>
                            <img src="/lets-icons_video.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-4">section-4</div>
            <div className="section-5">section-5</div>
            <div className="section-6">section-6</div>
            <div className="section-7">section-7</div>
            <div className="section-8">section-8</div>

        </>
    )
}
