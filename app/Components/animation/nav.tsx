import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex mx-auto items-center">
            <div className="flex-shrink-0">
              {/* Your logo or site title */}
              <span className="text-white font-semibold text-lg">Relikia</span>
            </div>
            <div className="ml-2">
              <svg className="w-4 h-4 text-white" viewBox="0 0 16 16">
                <rect width="16" height="16" strokeWidth="1" stroke="currentColor" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
