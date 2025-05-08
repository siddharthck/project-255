import React, { useState } from 'react';
import './LandingPage.css';

export default function LandingPage() {
  const [fileUploaded, setFileUploaded] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setFileUploaded(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-2xl p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to AI Tool Hub</h1>

        {!fileUploaded ? (
          <div className="flex flex-col items-center">
            <label className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl transition duration-300">
              Upload File
              <input
                type="file"
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>
          </div>
        ) : (
          <div className="mt-6">
            <p className="text-gray-700 text-lg mb-4">File Uploaded: <strong>{fileName}</strong></p>
            <div className="flex flex-col gap-4 mt-6">
              <a
                href="#translate-link"
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-xl font-semibold transition duration-300"
              >
                Translate
              </a>
              <a
                href="#eda-report-link"
                className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-6 rounded-xl font-semibold transition duration-300"
              >
                Generate EDA Report
              </a>
              <a
                href="#semantic-search-link"
                className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-6 rounded-xl font-semibold transition duration-300"
              >
                Semantic Search
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
