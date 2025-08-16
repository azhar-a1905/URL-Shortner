import React from "react";
import Urlform from "../components/Urlform";
const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-6 text-slate-800">
          Shorten Your URL
        </h2>
        <Urlform />
        {/* {error && <div className="mt-4 text-red-500 text-center">{error}</div>} */}
        
      </div>
    </div>
  );
};

export default HomePage;
