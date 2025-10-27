import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

import FramerWrapper from "./animation/FramerWrapper";

import Image from 'next/image'; // 1. Import the Image component
import { ArrowUpRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

interface ProjectCardProps {
  value: {
    title: string;
    description: string;
    tags: string[];
    link: string;
  };
  num: number;
}

const ProjectCards: React.FC<ProjectCardProps> = ({ value, num }) => {
  return (
    <FramerWrapper 
      className="max-w-[32%] max-lg:max-w-full" 
      y={0} 
      scale={0.8} 
      delay={num/4} 
      duration={0.15}
    >
      <Card className="w-full h-full flex flex-col hover:shadow-lg transition-all duration-300 border-2">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-bold text-primary">{value.title}</CardTitle>
        </CardHeader>
        
        <CardContent className="flex-grow flex flex-col gap-4">
          
          {/* 2. This block replaces the <p> tag */}
          <div className="relative w-full aspect-video overflow-hidden rounded-md mt-[15px]">
            <Image
              src={value.thumbnail} // <-- Make sure this property exists in your 'value' object
              alt={value.title}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {value.tags.map((tag: string, index: number) => {
              const tagStyles = {
                'Node-RED': 'bg-teal-100 text-teal-800',
                'IoT': 'bg-yellow-100 text-yellow-800',
                'Data Engineering': 'bg-blue-100 text-blue-800',
                'FreeRTOS': 'bg-red-100 text-red-800',
                'Robotics': 'bg-orange-100 text-orange-800',
                'Real-time Systems': 'bg-purple-100 text-purple-800',
                'Docker': 'bg-emerald-100 text-emerald-800',
                'Grafana': 'bg-indigo-100 text-indigo-800',
                'Library': 'bg-pink-100 text-pink-800',
                'Embedded Programming': 'bg-cyan-100 text-cyan-800',
                '3D Printing': 'bg-violet-100 text-violet-800'
              }[tag] || 'bg-gray-100 text-gray-800';

              return (
                <span 
                  key={index}
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${tagStyles}`}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </CardContent>

        <CardFooter className="pt-2 ">
          <Link
            href={value.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ 
                variant: "default", 
                size: "sm" 
              }),
              "w-fit transition-all hover:translate-y-[-2px] hover:shadow-md group"
            )}
          >
            View Project
            <ArrowUpRight className="h-4 w-4 ml-1 hidden group-hover:block -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
          </Link>
        </CardFooter>
      </Card>
    </FramerWrapper>
  );
};

export default ProjectCards;
