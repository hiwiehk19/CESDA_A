//import Image from 'next/image'

import FeatImage01 from '../assets/new.png'
import FeatImage02 from '../assets/2.png'
import FeatImage03 from '../assets/3.png'

export default function Zigzag() {
  return (
    <section>
      <div id="services" className="max-w-6xl mx-auto px-4  sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="mx-auto flex max-w-[58rem] pb-10 flex-col items-center space-y-4 text-center">
    
    <h2 className="font-bold text-3xl leading-[1.1] text-[#0A6F9D] sm:text-3xl md:text-6xl">Our Services</h2>

</div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={540} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                   <h5 className="text-2xl text-black text-bold mb-3">Generating, synthesizing, and translating high-quality evidence for EIDM</h5>
                  <ul className="text-lg text-gray-400 mb-2 text-sm">
                    <li className="flex items-center mb-6">
                      <svg className="w-6 h-6 fill-current text-green-500  mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                     


                      <span>We conduct high-quality evidence generation-design and implement rigorous research studies, evaluations, and surveys to generate credible and relevant evidence for addressing complex development challenges</span>
                    </li>
                    <li className="flex items-center mb-6 text-sm">
                      <svg className="w-6 h-6  fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>We undertake systematic evidence synthesis - Aggregate and analyze existing research through systematic reviews, meta-analyses, and rapid reviews among other methods to provide comprehensive insights on critical policy and programmatic issues.</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <svg className="w-6 h-6 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Prepare knowledge translation products – develop policy briefs, evidence summaries, and interactive tools that transform complex evidence into accessible and actionable formats tailored to decision-makers
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={540} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                   <h2 className="text-2xl text-black text-bold mb-3">Empowering institutions, policymakers and leaders through capacity building and mechanisms for Evidence-informed policymaking and decision-making</h2>
                  <ul className="text-lg text-gray-400 mb-2 text-sm">
                    <li className="flex items-center mb-6">
                      <svg className="w-6 h-6 fill-current text-green-500  mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                     


                      <span>We provide training programs and workshops to enhance the skills and knowledge on evidence -informed decision making
                      </span>
                    </li>
                    <li className="flex items-center mb-6 text-sm">
                      <svg className="w-6 h-6  fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>We deliver training programs and mentorship initiatives that equip stakeholders from various sectors including researchers, policy makers and knowledge intermediaries with the skills to generate, interpret, and apply evidence in decision-making processes, ensuring inclusivity and sustainability.</span>
                    </li>
                    <li className="flex items-center mb-6 text-sm">
                      <svg className="w-6 h-6 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>We focus on developing strong capabilities in evidence synthesis, translation, and communication

                      </span>
                    </li>
                    <li className="flex items-center text-sm">
                      <svg className="w-6 h-6 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>We offer mentorship programs to nurture emerging leaders in evidence-informed decision-making with a goal to shape future leaders who prioritize evidence-based approaches for sustainable and equitable development 

                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width={540} height={405} alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                   <h5 className="text-2xl text-black text-bold mb-3">Strengthen cross-sectoral, multi-stakeholder collaborations to enhance evidence generation, translation, and utilization for equitable and sustainable development
                   </h5>
                  <ul className="text-lg text-gray-400 mb-2 text-sm">
                    <li className="flex items-center mb-6">
                      <svg className="w-6 h-6 fill-current text-green-500  mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                     


                      <span>We facilitate multi-stakeholder platforms – we organize forums, workshops, and conferences that bring together researchers, policymakers, practitioners, and community leaders to collaboratively address development challenges and share evidence-based solutions.
                      </span>
                    </li>
                    <li className="flex items-center mb-6 text-sm">
                      <svg className="w-6 h-6  fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>We foster partnerships for evidence generation - build strategic alliances with academic institutions, research organizations, and private sector entities to co-produce high-quality evidence that address cross-sectoral social issues including health, education and climate change
                      </span>
                    </li>
                    <li className="flex items-center text-sm">
                      <svg className="w-6 h-6 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>We strive to develop and contextualize knowledge translation mechanisms – we design and implement tools, guidelines, and processes for effectively translating evidence into user-friendly formats tailored for diverse stakeholders.

                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
