import { Circle, Languages, Globe2, User, Star } from "lucide-react"; // Note: Replaced Dna with Heart for Hobbies
import { portfolioConfig } from "@/config/portfolio.config";

const Aboutfooter = () => {
  // 1. Data Structure for Personal Info (for clean badges)
  const personalData = [
    { label: "Languages", value: portfolioConfig.about.personalInfo.language, icon: <Languages className="h-4 w-4" /> },
    { label: "Nationality", value: portfolioConfig.about.personalInfo.nationality, icon: <Globe2 className="h-4 w-4" /> },
    { label: "Gender", value: portfolioConfig.about.personalInfo.gender, icon: <User className="h-4 w-4" /> }, // Used Heart as a simple placeholder icon
  ];

  const hobbies = portfolioConfig.about.hobbies || [];

  return (
    <div className="flex flex-col gap-8 w-full">

      {/* ------------------------- 
          SECTION 1: PERSONAL BADGES (Horizontal & Scannable)
          ------------------------- */}
      <div className="flex flex-wrap gap-4 justify-between max-sm:justify-center">
          {personalData.map((item, index) => (
            // Individual Badge/Card
            <div
              key={index} 
              // ----------------------------------------------------------------------
              // MODIFIED CLASS LINE: Added transition, cursor-pointer, and hover effects
              // ----------------------------------------------------------------------
              className="flex flex-col items-start p-4 bg-gray-50/10 rounded-lg border border-[#2f7df4] w-1/4 min-w-[150px] max-sm:min-w-[45%] 
                        transition-colors duration-200 cursor-pointer 
                        hover:bg-[#2f7df4]/10 hover:border-[#2f7df4]" 
              // ----------------------------------------------------------------------
            >
              {/* Label - secondary and subtle */}
              <span className="inline-flex text-sm font-poppins text-[16px] text-gray-500 gap-2 mb-[2px]">{item.icon} {item.label}</span>
              
              {/* THIS IS THE CONTAINER THAT NEEDS TO BE A COLUMN */}
              <div className="flex flex-col gap-[1px] mt-[10px]"> 
                  {item.value.map((lang, langIndex) => (
                      // Each iteration creates a new row element
                      <p 
                          key={langIndex} 
                          className="text-xl font-semibold text-primary flex items-center gap-2"
                      >
                          {/* The Bullet Point Icon */}
                          <Circle className="h-2.5 w-2.5 fill-current text-[#2f7df4]" /> 
                          
                          {/* The Language Text */}
                          <span className="text-sm font-poppins text-gray-500">
                              {lang}
                          </span>
                      </p>
                  ))}
              </div>
            </div>
          ))}
      </div>
      {/* ------------------------- 
          SECTION 2: HOBBIES (Tags/Pills)
          ------------------------- */}
      <div className="w-full pt-4 border-t border-gray-700">
        <h2 className="text-3xl font-poppins text-primary font-semibold mb-4 flex items-center gap-2 icon_underline">
          <Star className="h-6 w-6" /> Hobbies
        </h2>
        
        <div className="flex flex-wrap gap-3">
          {hobbies.map((hobby, index) => (
            <span 
              key={index} 
              className="px-4 py-1.5 rounded-full bg-[#2f7df4] text-white text-sm font-medium transition-all hover:scale-[1.05] cursor-pointer"
            >
              {hobby}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutfooter;