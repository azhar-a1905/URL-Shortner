import React, { useState } from "react";
import Urlform from "./components/Urlform";
import HomePage from "./pages/HomePage";

const App = () => {
  // const [url, setUrl] = useState("");
  // const [shortUrl, setShortUrl] = useState("");
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

  // const handleShorten = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError("");
  //   setShortUrl("");
  //   try {
  //     // TODO: Replace with real API call
  //     setTimeout(() => {
  //       setShortUrl("https://sho.rt/xyz789");
  //       setLoading(false);
  //     }, 1000);
  //   } catch (err) {
  //     setError("Something went wrong. Please try again.");
  //     setLoading(false);
  //   }
  // };

  return (
    <>
      <HomePage />;
      
    </>
  );
};

export default App;
