"use client";
import React, { useState, useEffect } from "react";
import { portfolioConfig } from "@/config/portfolio.config"; 

// --- Configuration for Typing Speed and Timing ---
const TYPING_SPEED = 100; // ms per character typed
const DELETING_SPEED = 50;  // ms per character deleted (faster)
const PAUSE_TIME = 1500;  // ms to pause after a word is fully typed

function TextRotator(): JSX.Element { 
  const roles: string[] = portfolioConfig.skills.roles || []; 

  const [currentRoleIndex, setCurrentRoleIndex] = useState<number>(0);
  const [displayedText, setDisplayedText] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    if (roles.length === 0) return;
    
    const currentRole: string = roles[currentRoleIndex];
    let timer: NodeJS.Timeout; // Type for the timer ID

    if (!isDeleting && displayedText !== currentRole) {
      // TYPING LOGIC
      timer = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
      }, TYPING_SPEED);

    } else if (displayedText === currentRole && !isDeleting) {
      // PAUSE LOGIC
      timer = setTimeout(() => {
        setIsDeleting(true); 
      }, PAUSE_TIME);

    } else if (isDeleting && displayedText !== '') {
      // DELETING LOGIC
      timer = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
      }, DELETING_SPEED);

    } else if (isDeleting && displayedText === '') {
      // CYCLING LOGIC
      setIsDeleting(false);
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }

    // Cleanup: Clear the timer
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  return (
    <div className="py-4 rounded-md flex flex-col justify-center items-center overflow-hidden">
      <div className="font-poppins text-base sm:text-2xl [text-wrap:balance] text-gray-700">
        {portfolioConfig.title} &
        
        <span className="inline-flex ml-2 items-center">
            {/* The dynamic text being typed */}
            <span 
              className="font-rubik mt-[1px] text-lg sm:text-3xl leading-tight text-[#2f7df4]"
            >
              {displayedText}
            </span>
            {/* The Blinking Cursor */}
            <span 
              className="ml-1 w-[2px] h-full bg-[#2f7df4] inline-block motion-safe:animate-blink" 
              style={{ minHeight: '1.2em' }}
            ></span>
        </span>
        
      </div>
    </div>
  );
}

export default TextRotator;