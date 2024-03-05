import React from 'react'
import '../../Stylings/About/HeaderStyle.css'
const AboutUsHeader = () => {
    return (
        <div>
            <section class="main-header">
                <div class="w-4/5 m-auto">
                    <div class="flex flex-col lg:flex-row">
                        <div class="lg:w-1/2 flex items-center p-10">
                            <div class="custom-container">
                                <div class="my-2">
                                    <img src="usi.png" alt="" srcset="" width="50%"/> 
                                </div>
                                <div class="my-2">
                                    <h4 class="text-2xl lg:text-3xl font-bold">
                                        <span class="text-yellow-500">From Rural to Global :</span> Building a bridge to success from your doorstep
                                    </h4>
                                </div>
                                <div class="my-2 py-2">
                                    <p class="text-lg lg:text-xl">
                                        Empowering Dreams, Forging Innovators: NEP's Technical Courses Leading India's Technological Renaissance Through its Courses
                                    </p>
                                </div>
                                <div class="my-2 py-2 flex gap-5">
                                    <div class="w-1/3">
                                        <div class="header-card">
                                            <h4 class="text-2xl">
                                                5K+
                                            </h4>
                                            <h6>
                                                Students Tutored
                                            </h6>
                                        </div>
                                    </div>
                                    <div class="w-1/3">
                                        <div class="header-card">
                                            <h4 class="text-2xl">
                                                75+
                                            </h4>
                                            <h6>
                                                Schools Covered
                                            </h6>
                                        </div>
                                    </div>
                                    <div class="w-1/3">
                                        <div class="header-card">
                                            <h4 class="text-2xl">
                                                100+
                                            </h4>
                                            <h6>
                                                Workshops Conducted
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="my-4 py-2 lg:col-6">
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeZ6ZdyhdyORKiAN8KcAJI_yKCBjBAUZy9f8HyGiVwH5lOcmQ/viewform?usp=sf_link">
                                        <button class="btn custom-button">Register Now</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="lg:w-1/2 p-10">
                            <div class="container flex justify-center items-end">
                                <img src="https://techlearnsacademy.com/headerimage.png" alt="" class="w-95" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default AboutUsHeader