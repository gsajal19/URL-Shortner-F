import { useState } from "react";
import { nanoid } from "nanoid";

function InputForm({ setShowURL, setURL, setShowLoader, showLoader }) {
  const [originalurl, setOriginalurl] = useState("");
  const [validity, setValidity] = useState("MINUTE");  // Corrected the typo here

  const sendData = async (e) => {
    e.preventDefault();
    setShowURL(true);
    setShowLoader(true);

    // URL validation and modification function
    const validateAndSetUrl = (url) => {
      let updatedUrl = url;

      // Check if the URL starts with "http://" or "https://"
      if (!updatedUrl.startsWith("http://") && !updatedUrl.startsWith("https://")) {
        updatedUrl = "http://" + updatedUrl;  // Prepend "http://" if missing
      }

      return updatedUrl;  // Return the updated URL
    };

    // Validate the URL first
    const validatedUrl = validateAndSetUrl(originalurl);

    // If the URL is valid and the interval is correct, proceed
    if (validity === "MINUTE" || validity === "DAY" || validity === "WEEK") {
      console.log(validatedUrl + " Before pass");

      const collectData = {
        originalurl: validatedUrl,  // Use the validated URL
        intervaltype: validity,
        interval: 1,  // Example interval (you can adjust this logic)
        shortid: nanoid(10),  // Dynamically generate a short ID
      };

      console.log(validatedUrl + " After pass");

      try {
        // Send the data to the server
        const response = await fetch("https://url-shortner-b.onrender.com/generate", {
          method: "POST",
          body: JSON.stringify(collectData),
          headers: {
            "Content-Type": "application/json",
          },
        });

        // Check if the response is OK
        if (!response.ok) {
          throw new Error("Something went wrong with the request.");
        }

        // Parse the JSON response
        const result = await response.json();

        // Hide loader and set URL
        setShowLoader(false);
        setURL(result.shorturl);
        setOriginalurl("");  // Reset the input field
        setValidity("MINUTE");  // Reset validity to default
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    } else {
      console.error("Invalid interval type selected.");
      setShowLoader(false);
    }
  };

  return (
    <>
      <form className="flex gap-5 justify-center my-10" onSubmit={sendData}>
        {/* Controlled input for URL */}
        <input
          type="text"
          value={originalurl}  // Correctly passing value from state
          onChange={(e) => setOriginalurl(e.target.value)}  // Update state on change
          placeholder="https://example.xyz/123"
          required
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
          className={`bg-blue-500 hover:bg-blue-600 text-white font-medium px-3 py-1 rounded-md  ${showLoader ? "cursor-not-allowed" : "cursor-pointer"}`}
        />
      </form>
    </>
  );
}

export default InputForm;
