import React from "react";

const About = () => {
  return (
    <div name="About" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pbb-8 pl-4">
            <p className="sm:text-right text-5xl font-bold inline border-b-4  border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 pt-4">
          <div className="text-4xl font-bold py-4">
            <p>
              Hi, I'm Dave... It's nice to meet you! Please take a look
              around...
            </p>
          </div>
          <div>
            <p class="text-blue-300 text-left text-2xl py-4 w-full">
               This is a new venture for me. For the past 20 plus years, I have had the great fortune of 
               working as a respiratory therapist.  With over two decades of experience
               in healthcare, I have developed a deep understanding of the industry 
               and a passion for improving patient outcomes. Having fulfilled my goals in clinical life, I recently completed a 
               full stack web development bootcamp at the University of Connecticut and am 
               excited to bring my skills and 
               expertise to the field of technology. I believe that technology has the power to make a real difference in people's lives and I am passionate about using my new skills to create solutions that have a positive impact on society. I am committed to staying up to date with the latest advancements, and just as I have done in my healthcare career, I will use my skills to help improve the lives of others.  I am a hard worker, a team player, and a problem solver. I am excited to bring my skills and expertise to the field of technology and I look forward to working with you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
