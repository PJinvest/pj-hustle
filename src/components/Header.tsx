
import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center">
          <img 
            src="/pjhustle-logo.png" 
            alt="PJ7 Hustle" 
            className="h-12 w-auto"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
