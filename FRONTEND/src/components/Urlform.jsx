import React, { useState } from "react";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";
import { createShortUrl } from "../apis/shortUrl.api";
const Urldiv = () => {
  const [url, setUrl] = useState("https://www.google.com");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false); // New state for feedback
  const queryClient = useQueryClient();
  console.log(url);
  console.log("Urldiv component rendered");

  const handleSubmit = async () => {
    const data = await createShortUrl(url);
    setShortUrl(data);

    console.log("Response from server:", data);
    setShortUrl(data);
    setCopied(false); // Reset copied state when new URL is generated
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // Hide feedback after 1.5s
  };
  // const query = useQuery({ queryKey: ["todos"], queryFn: handleSubmit });

  // const mutation = useMutation({
  //   mutationFn: postTodo,
  //   onSuccess: () => {
  //     // Invalidate and refetch
  //     queryClient.invalidateQueries({ queryKey: ['todos'] })
  //   },
  // })

  return (
    <div className="flex flex-col gap-4">
      <input
        type="url"
        value={url}
        onInput={(e) => setUrl(e.target.value)}
        placeholder="Paste your long URL here..."
        className="border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors disabled:opacity-60"
      >
        Shorten Url
      </button>
      {shortUrl && (
        <div className="mt-6 flex flex-col items-center gap-2">
          <span className="text-slate-600 text-sm">Your short URL:</span>
          <a
            href={shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold underline break-all"
          >
            {shortUrl}
          </a>
          <button
            className="mt-2 px-3 py-1 bg-slate-200 rounded text-xs hover:bg-slate-300"
            onClick={handleCopy}
          >
            Copy
          </button>
          {copied && (
            <span className="text-green-600 text-xs mt-1">Copied!</span>
          )}
        </div>
      )}
    </div>
  );
};

export default Urldiv;
