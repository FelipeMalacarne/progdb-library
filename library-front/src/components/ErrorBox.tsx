import React from 'react';

interface ErrorBoxProps {
  error: string;
}

const ErrorBox: React.FC<ErrorBoxProps> = ({ error }) => {
  return (
    <div className="rounded-md bg-red-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
            fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd"
              d="M10 2.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM8.75 8.75a.75.75 0 111.5 0 .75.75 0 01-1.5 0zm2.5 4.25a1 1 0 11-2 0 1 1 0 012 0z"
              clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">
            {error}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ErrorBox;