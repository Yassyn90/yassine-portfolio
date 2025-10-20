"use client";
import { cn } from '@/lib/utils';
import { Download } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { buttonVariants } from './ui/button';
// Assuming HackerBtn is styled similarly to buttonVariants

function DownLoadResumeBtn() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the dropdown
  const toggleDropdown = () => setIsOpen(!isOpen);

  // File paths are relative to the /public folder
  const files = [
    { name: 'CV (English Version)', href: '/Cv_Idar_Yassyn_FR.pdf' },
    { name: 'CV (Version Française)', href: '/Cv_Idar_Yassyn_EN.pdf' },
  ];

  return (
    <div className="h-fit w-full mt-[-10px] py-2 px-0 relative">
      
      {/* 1. The main button (toggle) */}
      <button
        onClick={toggleDropdown}
        // Use your button styling, e.g., buttonVariants
        className={cn(buttonVariants({ variant: 'default' }), 'w-fit min-w-[200px] flex items-center gap-2')}
      >
        <Download className="h-4 w-4" />
        Download Resume
      </button>

      {/* 2. The dropdown menu */}
      {isOpen && (
        <div className="absolute z-10 mt-[4px] w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {files.map((file, index) => (
              <Link
                key={index}
                href={file.href}
                // Setting 'download' attribute forces the browser to download the file
                download 
                onClick={() => setIsOpen(false)} // Close dropdown after click
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {file.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DownLoadResumeBtn;