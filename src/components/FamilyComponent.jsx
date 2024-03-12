import React from "react";

const FamilyComponent = () => {
  return (
    <div className="p-12 lg:flex justify-center py-12 bg-white">
      <div className="flex space-x-20">
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-green-500 h-12 w-12 mx-auto"
          >
            <path d="M3 7V5c0-1.1.9-2 2-2h2"></path>
            <path d="M17 3h2c1.1 0 2 .9 2 2v2"></path>
            <path d="M21 17v2c0 1.1-.9 2-2 2h-2"></path>
            <path d="M7 21H5c-1.1 0-2-.9-2-2v-2"></path>
            <rect width="7" height="5" x="7" y="7" rx="1"></rect>
            <rect width="7" height="5" x="10" y="12" rx="1"></rect>
          </svg>
          <p className="mt-4 text-3xl font-bold">250+</p>
          <p className="text-lg">Members In Forcon Family</p>
        </div>
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-green-500 h-12 w-12 mx-auto"
          >
            <path d="M9.3 6.2a4.55 4.55 0 0 0 5.4 0"></path>
            <path d="M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3"></path>
            <path d="M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z"></path>
            <path d="m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8"></path>
          </svg>
          <p className="mt-4 text-3xl font-bold">1500+</p>
          <p className="text-lg">KMS Of Roads Constructed</p>
        </div>
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-green-500 h-12 w-12 mx-auto"
          >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
            <line x1="16" x2="16" y1="2" y2="6"></line>
            <line x1="8" x2="8" y1="2" y2="6"></line>
            <line x1="3" x2="21" y1="10" y2="10"></line>
          </svg>
          <p className="mt-4 text-3xl font-bold">25+</p>
          <p className="text-lg">Years Of Broad Experience</p>
        </div>
      </div>
    </div>
  );
};

export default FamilyComponent;
