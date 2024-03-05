import React from 'react'
import skillImage from '../../Assets/Icons/skills.png'
import enterperneurImage from '../../Assets/Icons/entrepreneur.png'
import earningImage from '../../Assets/Icons/earning.png'
import factorImage from '../../Assets/Icons/factory.png'
import promotionImage from '../../Assets/Icons/promotion.png'
import goalImage from '../../Assets/Icons/goal.png'
const TechLearnsBenefits = () => {
    return (
        <div><section class="py-3 my-3">
            <div class="w-4/5 m-auto">
                <div class="text-center py-4 my-2">
                    <h3 class="text-2xl lg:text-3xl font-bold">
                    Ambiguous <span class="text-yellow-500">Benefits</span>
                    </h3>
                </div>
                <div class="flex flex-wrap gap-4 justify-center">
                    <div class="lg:w-1/4 md:w-1/2 w-full">
                        <div class="benefit-card text-center">
                            <img src={skillImage} alt="" class="icon-image" />
                            <h5 class="text-lg font-semibold">Practical Skills Development</h5>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full">
                        <div class="benefit-card text-center">
                            <img src={factorImage} alt="" class="icon-image" />
                            <h5 class="text-lg font-semibold">Meeting Industry Demand</h5>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full">
                        <div class="benefit-card text-center">
                            <img src={goalImage} alt="" class="icon-image" />
                            <h5 class="text-lg font-semibold">Career Readiness</h5>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full">
                        <div class="benefit-card text-center">
                            <img src={earningImage} alt="" class="icon-image" />
                            <h5 class="text-lg font-semibold">High Earning Potential</h5>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full">
                        <div class="benefit-card text-center">
                            <img src={enterperneurImage} alt="" class="icon-image" />
                            <h5 class="text-lg font-semibold">Entrepreneurial Skills</h5>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full">
                        <div class="benefit-card text-center">
                            <img src={promotionImage} alt="" class="icon-image" />
                            <h5 class="text-lg font-semibold">Diverse Career Opportunities</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            {/* <section class="py-4 my-4 nep">
                <div class="w-4/5 m-auto">
                    <div class="text-center">
                        <h6>National Education Policy</h6>
                        <h3 class="text-2xl lg:text-3xl font-bold">Why is <span class="text-yellow-500">NEP</span> Important</h3>
                    </div>
                    <div class="text-center py-4">
                        <div class="py-3">
                            <i class="fas fa-quote-left"></i>
                            <div class="nep-intro px-5 py-2">
                                In India, NEP holds immense importance as it serves as a blueprint for the development and improvement of the entire education system in the country.
                            </div>
                            <i class="fas fa-quote-right"></i>
                        </div>
                        <p class="nep-para">
                            Aiming to revolutionize the country's education system. It focuses on foundational learning, critical thinking, and holistic development. The policy advocates for a flexible and multidisciplinary approach, encouraging students to explore diverse subjects. It emphasizes the integration of technology in education and promotes the use of e-learning resources. The NEP also aims to increase access to quality education and reduce disparities among different regions and socio-economic backgrounds, fostering a more inclusive and equitable learning environment for all learners in India.
                        </p>
                        
                    </div>
                </div>
            </section> */}
        </div>
    )
}

export default TechLearnsBenefits