import React from 'react';
//import Image from 'next/image';
import profile from '../assets/manager.png';
import profile1 from '../assets/business-women.png';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Features() {
  const teamMembers = [
    {
      name: 'Sabit Ababor',
      position: 'General Manager',
      email: 'sabitababor@cesda.org',
      linkedin: 'https://www.linkedin.com/in/sabit-ababor-3b603a6a/',
      image: profile,
    },
    {
      name: 'Firmaye Bogale',
      position: 'Deputy General Manager',
      email: 'firmayebogale@cesda.org',
      linkedin: 'https://et.linkedin.com/in/firmaye-bogale-172200123',
      image: profile1,
    },
    {
      name: 'Birhanu Kenate',
      position: 'Researcher',
      email: 'birhanukenate@cesda.org',
      linkedin: 'https://www.linkedin.com/in/birhanu-kenate-363a52256/',
      image: profile,
    },
    {
      name: 'Dabesa Gobena',
      position: 'Researcher',
      email: 'dabesagobena@cesda.org',
      linkedin: 'https://sg.linkedin.com/in/dabesa-gobena-733967134',
      image: profile,
    },
    {
      name: 'Ermias Woldie',
      position: 'Researcher',
      email: 'ermiaswoldie@cesda.org',
      linkedin: 'https://www.linkedin.com/in/ermias-woldie-378b1b26',
      image: profile,
    },
    {
      name: 'Gelila Abraham',
      position: 'Researcher',
      email: 'gelilaabraham@cesda.org',
      linkedin: 'https://www.linkedin.com/in/gelila-abraham-884298313/',
      image: profile1,
    },
    {
      name: 'Getahun Fetensa',
      position: 'Researcher',
      email: 'getahunfetensa@cesda.org',
      linkedin: 'https://www.linkedin.com/in/getahun-fetensa-127167126/',
      image: profile,
    },
    {
      name: 'Dr. Mamuye Hadis',
      position: 'Researcher',
      email: 'mamuyehadis@cesda.org',
      linkedin: 'https://et.linkedin.com/in/mamuyehadis',
      image: profile,
    },
    {
      name: 'Prof. Mirgissa Kaba',
      position: 'Researcher',
      email: 'mirgissakaba@cesda.org',
      linkedin: 'https://et.linkedin.com/in/mirgissa-kaba-2926b235',
      image: profile,
    },
    {
      name: 'Zelalem Kebede',
      position: 'Researcher',
      email: 'zelalemkebede@cesda.org',
      linkedin: 'https://www.linkedin.com/in/zelalem-kebede-397baa249',
      image: profile,
    },
    {
      name: 'Prof. Zewdie Birhanu',
      position: 'Researcher',
      email: 'zewdiebirhanu@cesda.org',
      linkedin: 'https://et.linkedin.com/in/zewdie-birhanu-a50453234',
      image: profile,
    },
  ];

  return (
    <section id="team" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-manrope text-5xl text-center text-[#0A6F9D] font-bold mb-6">Meet Our Team</h2>
          <p className="text-lg text-gray-500 text-center">These people work on making our product best.</p>
        </div>
        {/* First row with 2 members */}
        <div className="flex flex-wrap justify-center gap-y-10 max-w-3xl pb-6 mx-auto lg:max-w-full">
          {teamMembers.slice(0, 2).map((member, index) => (
            <div
              key={index}
              className="group block text-center lg:w-1/6 sm:w-1/3 min-[450px]:w-1/2 w-full"
            >
              <div className="relative mb-5">
                <img
                  className="w-28 h-28 rounded-2xl object-cover mx-auto transition-all duration-500 border-2 border-solid border-transparent group-hover:border-[#0A6F9D]"
                  src={member.image}
                  alt={member.name}
                  width={100}
                  height={100}
                />
              </div>
              <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-[#0A6F9D]">
                {member.name}
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                {member.position}
              </span>
              <div className="flex justify-center items-center gap-4 mt-3">
                <a href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0A6F9D] text-xl">
                  <FaEnvelope />
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0A6F9D] text-xl">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Second row with remaining members */}
        <div className="flex flex-wrap justify-center gap-y-10 max-w-3xl mx-auto lg:max-w-full">
          {teamMembers.slice(2).map((member, index) => (
            <div
              key={index}
              className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full"
            >
              <div className="relative mb-5">
                <img
                  className="w-28 h-28 rounded-2xl object-cover mx-auto transition-all duration-500 border-2 border-solid border-transparent group-hover:border-[#0A6F9D]"
                  src={member.image}
                  alt={member.name}
                  width={100}
                  height={100}
                />
              </div>
              <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-[#0A6F9D]">
                {member.name}
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                {member.position}
              </span>
              <div className="flex justify-center items-center gap-4 mt-3">
                <a href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0A6F9D] text-xl">
                  <FaEnvelope />
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0A6F9D] text-xl">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
