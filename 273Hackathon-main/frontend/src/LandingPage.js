// import React, { useState } from 'react';
// import './LandingPage.css';
// import { Link } from 'react-router-dom';


// export default function LandingPage() {
//   const [fileUploaded, setFileUploaded] = useState(false);
//   const [fileName, setFileName] = useState('');

//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFileName(file.name);
//       setFileUploaded(true);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
//       <div className="bg-white shadow-xl rounded-2xl w-full max-w-2xl p-8 text-center">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to AI Tool Hub</h1>

//         {!fileUploaded ? (
//           <div className="flex flex-col items-center">
//             <label className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl transition duration-300">
//               Upload File
//               <input
//                 type="file"
//                 className="hidden"
//                 onChange={handleFileUpload}
//               />
//             </label>
//           </div>
//         ) : (
//           <div className="mt-6">
//             <p className="text-gray-700 text-lg mb-4">File Uploaded: <strong>{fileName}</strong></p>
//             <div className="flex flex-col gap-4 mt-6">
//               <a
//                 href="#translate-link"
//                 className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-xl font-semibold transition duration-300"
//               >
//                 Translate
//               </a>
//               <a
//                 href="#eda-report-link"
//                 className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-6 rounded-xl font-semibold transition duration-300"
//               >
//                 Generate EDA Report
//               </a>
//               <Link to="/semantic-search" className="button-link semantic">Semantic Search</Link>


//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

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
    <div className="page-wrapper">
      <nav className="navbar">
        <div className="navbar-brand">ContentBot.AI</div>
        <div className="navbar-links">
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="chatgpt-style-container">
        <div className="chatgpt-card">
          <h1 className="chatgpt-title">Automatic Data Mining for PDF Files</h1>
          <h2 className="chatgpt-title">The Future of Writing is Here</h2>
          <p className="chatgpt-subtitle">Content Marketing just got easier.</p>
          <p className="chatgpt-highlights">
            <strong>Content automation</strong>, <strong>Blog content</strong>, <strong>paraphrasing</strong>, <strong>ad copy</strong>, and so much more.
          </p>

          {!fileUploaded ? (
            <label className="upload-label">
              Upload File
              <input type="file" onChange={handleFileUpload} />
            </label>
          ) : (
            <>
              <p className="file-name">File Uploaded: <strong>{fileName}</strong></p>
              <div className="button-group">
                <a href="#translate-link" className="button-link translate">Translate</a>
                <a href="#eda-report-link" className="button-link eda">Generate EDA Report</a>
                <Link to="/semantic-search" className="button-link semantic">Semantic Search</Link>
              </div>
            </>
          )}
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2025 ContentBot.AI. All rights reserved.</p>
      </footer>
    </div>
  );
}