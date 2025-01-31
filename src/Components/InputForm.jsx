import { useState } from "react";
import {nanoid} from 'nanoid'
function InputForm({setShowURL,setURL,setShowLoader}) {
  // Fixed the typo from 'validiy' to 'validity'
  const [originalurl, setOriginalurl] = useState("");
  const [validity, setValidity] = useState("MINUTE");  // Corrected the typo here

  // Handling the form submission
  const sendData = async (e) => {
    setShowURL(true);
    setShowLoader(true);

    e.preventDefault();

    // Check if the selected validity is valid
    if (validity === 'MINUTE' || validity === 'DAY' || validity === 'WEEK') {
      const collectData = {
        originalurl: originalurl,
        intervaltype: validity, // interval type is now `validity` instead of the typo
        interval: 1,
        shortid: nanoid(10),  // Ideally, this should be dynamically generated
      };

      try {
        const data = await fetch("https://url-shortner-b.onrender.com/generate", {
          body: JSON.stringify(collectData),
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        // Check if the response is OK
        if (!data.ok) {
          throw new Error("Something went wrong with the request.");
        }

        const result = await data.json();
        setShowLoader(false);
        setURL(result.shorturl) 
        setOriginalurl("");
        setValidity("MINUTE");
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    } else {
      console.error("Invalid interval type selected.");
    }
  };

  return (
    <>
      <form className="flex gap-5 justify-center my-10" onSubmit={sendData}>
        {/* Controlled input for URL */}
        <input
          type="text"
          value={originalurl}  // Correctly passing value from state
          onChange={(e) => setOriginalurl(e.target.value)}  // Updating state on change
          placeholder="https://example.xyz/123" required
          className="w-1/3 border-b pb-2 border-violet-900 font-medium focus:outline-0 text-lg"
        />

        {/* Controlled select for validity */}
        <select
          value={validity}  // Correctly passing value from state
          onChange={(e) => setValidity(e.target.value)}  // Updating state on change
          className="border p-2 rounded"
        >
          <option value="MINUTE">1 MINUTE</option>
          <option value="DAY">1 DAY</option>
          <option value="WEEK">1 WEEK</option>
        </select>

        {/* Submit button */}
        <input
          type="submit"
          value="Submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-3 py-1 rounded-md cursor-pointer"
        />
      </form>
    </>
  );
}

export default InputForm;
