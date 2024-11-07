"use client"
import { useRef, useState } from 'react'

export default function Home() {
    const scrollRef = useRef<any>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const scrollRef1 = useRef<any>(null);
    const [isDragging1, setIsDragging1] = useState<boolean>(false);
    const [startX1, setStartX1] = useState(0);
    const [scrollLeft1, setScrollLeft1] = useState(0);

    const scrollRef2 = useRef<any>(null);
    const [isDragging2, setIsDragging2] = useState<boolean>(false);
    const [startX2, setStartX2] = useState(0);
    const [scrollLeft2, setScrollLeft2] = useState(0);

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

    const onMouseMove = (e: any) => {
        if (!isDragging) return;
        console.log("...........");
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scroll speed by multiplying
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const onTouchStart = (e: any) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const onTouchMove = (e: any) => {
        if (!isDragging) return;
        // e.preventDefault();
        const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scroll speed by multiplying
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const onTouchEnd = () => {
        setIsDragging(false);
    };


    const onMouseDown1 = (e: any) => {
        setIsDragging1(true);
        setStartX1(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft1(scrollRef.current.scrollLeft);
    };

    const onMouseLeave1 = () => {
        setIsDragging1(false);
    };

    const onMouseUp1 = () => {
        setIsDragging1(false);
    };

    const onMouseMove1 = (e: any) => {
        if (!isDragging1) return;
        e.preventDefault();
        const x = e.pageX - scrollRef1.current.offsetLeft;
        const walk = (x - startX1) * 2; // Adjust scroll speed by multiplying
        scrollRef1.current.scrollLeft = scrollLeft1 - walk;
    };

    const onTouchStart1 = (e: any) => {
        setIsDragging1(true);
        setStartX1(e.touches[0].pageX - scrollRef1.current.offsetLeft);
        setScrollLeft1(scrollRef1.current.scrollLeft);
    };

    const onTouchMove1 = (e: any) => {
        if (!isDragging1) return;
        // e.preventDefault();
        const x = e.touches[0].pageX - scrollRef1.current.offsetLeft;
        const walk = (x - startX1) * 2; // Adjust scroll speed by multiplying
        scrollRef1.current.scrollLeft = scrollLeft1 - walk;
    };

    const onTouchEnd1 = () => {
        setIsDragging1(false);
    };

    const onMouseDown2 = (e: any) => {
        setIsDragging2(true);
        setStartX2(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft2(scrollRef.current.scrollLeft);
    };

    const onMouseLeave2 = () => {
        setIsDragging2(false);
    };

    const onMouseUp2 = () => {
        setIsDragging2(false);
    };

    const onMouseMove2 = (e: any) => {
        if (!isDragging2) return;
        e.preventDefault();
        const x = e.pageX - scrollRef2.current.offsetLeft;
        const walk = (x - startX2) * 2; // Adjust scroll speed by multiplying
        scrollRef2.current.scrollLeft = scrollLeft2 - walk;
    };

    const onTouchStart2 = (e: any) => {
        setIsDragging2(true);
        setStartX2(e.touches[0].pageX - scrollRef2.current.offsetLeft);
        setScrollLeft2(scrollRef2.current.scrollLeft);
    };

    const onTouchMove2 = (e: any) => {
        if (!isDragging2) return;
        // e.preventDefault();
        const x = e.touches[0].pageX - scrollRef2.current.offsetLeft;
        const walk = (x - startX2) * 2; // Adjust scroll speed by multiplying
        scrollRef2.current.scrollLeft = scrollLeft2 - walk;
    };

    const onTouchEnd2 = () => {
        setIsDragging2(false);
    };

    return (
        <>
            <div className="section-1">
                <div className='section-div1' id='home'>
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
                <h2 id='about'>About Us</h2>
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
                <img src="/Frame (4).png" alt="" className='im5' />

                <h2 id='workout'>Workout</h2>
                <div
                    ref={scrollRef}
                    onMouseDown={onMouseDown}
                    onMouseLeave={onMouseLeave}
                    onMouseUp={onMouseUp}
                    onMouseMove={onMouseMove}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
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
            <div className="section-4">
                <img src="/Frame (4).png" alt="" className='im5' />
                <h2 id='diet'>Information about Diet
                    one Day</h2>
                <div>
                    <div>
                        <img src='/photo.png' />
                    </div>
                    <div>
                        <div>
                            <img src='/Frame 44.png' />
                            <img src='/Frame 45.png' />
                            <img src='/Frame 46.png' />

                        </div>
                        <div>
                            <p>
                                The number of calories of carbohydrates you need per day can vary depending on factors such as your age, gender, weight, height, activity level, and overall health goals. However, a general guideline for carbohydrate intake is around 45% to 65% of your total daily calorie intake.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="section-3">
                <h2 id='yoga'>Yoga</h2>
                <img src="/Frame (4).png" alt="" className='im4' />
                <div
                    ref={scrollRef1}
                    onMouseDown={onMouseDown1}
                    onMouseLeave={onMouseLeave1}
                    onMouseUp={onMouseUp1}
                    onMouseMove={onMouseMove1}
                    onTouchStart={onTouchStart1}
                    onTouchMove={onTouchMove1}
                    onTouchEnd={onTouchEnd1}
                >
                    <div>
                        <div>
                            <img src="/4.jfif" alt="" />
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
                            <img src="/6.jfif" alt="" />
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
                            <img src="/8.jfif" alt="" />
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
                            <img src="/30.png" alt="" />
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
                            <img src="/20.png" alt="" />
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
                            <img src="/21.png" alt="" />
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
            <div className="section-6">
                <img src="/Frame (4).png" alt="" className='im4' />
                <h2>What do our customers think</h2>
                <div
                    ref={scrollRef2}
                    onMouseDown={onMouseDown2}
                    onMouseLeave={onMouseLeave2}
                    onMouseUp={onMouseUp2}
                    onMouseMove={onMouseMove2}
                    onTouchStart={onTouchStart2}
                    onTouchMove={onTouchMove2}
                    onTouchEnd={onTouchEnd2}
                >
                    <div>
                        <div>
                            <img src="/12.jfif" alt="" />
                            <div>
                                <span>
                                    Sarah Smith
                                </span>
                            </div>
                        </div>
                        <div>
                            <p>
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
                            </p>
                            <div>
                                <img src="/st1.png" alt="" />
                                <img src="/st1.png" alt="" />
                                <img src="/st1.png" alt="" />
                                <img src="/st1.png" alt="" />
                                <img src="/st1.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/13.jfif" alt="" />
                            <div>
                                <span>
                                    John Doe
                                </span>
                            </div>
                        </div>
                        <div>
                            <p>
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
                            </p>
                            <div>
                                <img src="/st1.png" alt="" />
                                <img src="/st1.png" alt="" />
                                <img src="/st1.png" alt="" />
                                <img src="/st1.png" alt="" />
                                <img src="/st0.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/1.jfif" alt="" />
                            <div>
                                <span>
                                    Sarah Smith
                                </span>
                            </div>
                        </div>
                        <div>
                            <p>
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
                            </p>
                            <div>
                                <img src="/st1.png" alt="" />
                                <img src="/st1.png" alt="" />
                                <img src="/st1.png" alt="" />
                                <img src="/st1.png" alt="" />
                                <img src="/st0.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-7">
                <img src="/Frame (4).png" alt="" className='im4' />
                <div>
                    <div>
                        <h2>Subscribe Us</h2>
                        <input type="text" placeholder='Enter Email' />
                        <button>Subscribe</button>
                    </div>
                    <div>
                        <img src="/2.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="section-8">
                <div>
                    <div>
                        <img src="/icon.png" alt="" />
                        <p>
                            Founded by fitness enthusiasts, our mission is to make exercise accessible, enjoyable, and effective for everyone, regardless of their fitness level or background. With a focus on innovation and user-centric design.
                        </p>
                        <div>
                            <img src="/pajamas_twitter.png" alt="" />
                            <img src="/lets-icons_insta.png" alt="" />
                            <img src="/iconoir_facebook.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <h2>Company</h2>
                        <ul>
                            <li>Home</li>
                            <li>Class</li>
                            <li>Blog</li>
                            <li>Trainers</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Category</h2>
                        <ul>
                            <li>Strength Trainings</li>
                            <li>Body Building</li>
                            <li>Basic Yoga</li>
                            <li>Weight Lost</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Contact Us</h2>
                        <ul className='ul1'>
                            <li>
                                <img src="/ph_phone-light.png" alt="" />
                                <span>256 897 245</span>
                            </li>
                            <li>
                                <img src="/material-symbols-light_mail-outline.png" alt="" />
                                <span>FitLife@gmail.com</span>
                            </li>
                            <li>
                                <img src="/mynaui_location.png" alt="" />
                                <span>Tigran Mets 45</span>
                            </li>
                        </ul>
                    </div>

                </div>
                <div>
                    <img src="/footer.png" alt="" />
                    <p>Copyright2024.All rights reserved@FitLife</p>
                </div>
            </div>

        </>
    )
}
