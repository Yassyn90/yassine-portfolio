import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";
// Assuming you'll have this config file in the parent directory
// Adjust the import path if needed, e.g., "../config/portfolio.config"

const educationPage = () => {
  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden p-4 md:p-8"> {/* Added padding for better layout */}
      <Badge variant="secondary" className="gap-1.5"> {/* Removed manual padding, relying on base style */}
        <Briefcase className="h-4 w-4" />
        Education
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Education</Heading>
      </div>

      {/* Timeline Container */}
      <div className="w-full h-fit flex flex-col">
        {portfolioConfig.education.map((edu, index) => (
          // Timeline Item
          <div className="w-full h-fit flex max-sm:flex-col" key={index}>
            
            {/* Left Side: Date */}
            <FramerWrapper
              y={0}
              x={-100}
              delay={0.35 + index * 0.1}
              className="w-full sm:w-1/4 font-rubik flex sm:justify-end sm:items-start pt-5 pr-8 text-lg max-sm:pb-2 text-gray-600 dark:text-gray-400" // Styled date text
            >
              {edu.period}
            </FramerWrapper>

            {/* Right Side: Details with Timeline */}
            <FramerWrapper
              y={0}
              x={100}
              delay={0.35 + index * 0.1}
              // Added pb-12 for more spacing between items
              className="relative w-full sm:w-3/4 border-l-4 border-l-gray-300 dark:border-l-gray-700 p-4 pb-12 gap-3" 
            >
              {/* The "Dot" on the timeline - styled to match common themes */}
              <div className="absolute -left-[10px] top-6 h-4 w-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900" />

              {/* Flex container for text and logo */}
              <div className="flex justify-between items-start w-full gap-4">
            
                {/* Left part (Text) */}
                <div className="flex flex-col gap-1 flex-grow">
                  <div className="text-2xl font-rubik font-semibold max-sm:text-xl text-gray-900 dark:text-white">
                    {edu.degree}
                  </div>
                  <div className="text-lg font-poppins text-gray-600 dark:text-gray-400 max-sm:text-base">
                    {edu.institution}
                  </div>
                  <p className="font-poppins text-base w-full text-gray-700 dark:text-gray-300 max-sm:text-sm mt-2">
                    {edu.description}
                  </p>
                </div>

                {/* Right part (Logo) */}
                <div className="flex-shrink-0 w-[100px] h-[100px] max-sm:w-16 max-sm:h-16 ml-4">
                  {/* Using a standard <img> tag for compatibility. */}
                  <img
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    className="w-full h-full object-contain rounded-md bg-white p-1 shadow-md" // Added bg, padding, and shadow for better presentation
             
                  />
                </div>

              </div>
            </FramerWrapper>
          </div>
        ))}
      </div>
    </div>
  );
};

export default educationPage;