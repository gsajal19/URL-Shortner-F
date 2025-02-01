import { useState } from "react";
import QRCode from "react-qr-code";
import Loader from "./Loader";


function Showurl({URL,showLoader}) {
    const [copyAlert,setCopyAlert] = useState("");
    const copyToClipboard = () => {
        const copyText = document.getElementById("shorturl");

        // Create a temporary input element to select the text
        const input = document.createElement('input');
        input.value = copyText.innerText;  // Set input's value to the text we want to copy
        document.body.appendChild(input);  // Append the input element to the body
    
        input.select();  // Select the text
        document.execCommand("copy");  // Execute the copy command
        const run = ()=>{
            setCopyAlert("Text Copied Successfully")
            setTimeout(()=>{
                setCopyAlert("");
            },1500);
        }
        run();
        // Remove the input element after the action
        document.body.removeChild(input);
        
    }

    function GeneratedURL(){
        return (<>   <h1 className="text-lg text-center font-bold">Your url is generated, now you can use it anywhere</h1>
            <div className="flex w-full flex-col items-center">
                <div id="shorturl" className="bg-gradient-to-r from-yellow-100 via-orange-300 to-blue-300 font-medium my-5 w-fit px-5 py-2 rounded-lg justify-self-center">
                    {""+URL}
                </div>
                <button onClick={copyToClipboard} className="px-3 py-2 bg-blue-600 text-white rounded-lg ">Click To Copy <i className="fa fa-clipboard" aria-hidden="true"></i></button>
                <p>{""+copyAlert+""}</p>
    
                <p className="font-medium my-2">Scan QR Code</p>
              
                <QRCode value={URL} size={100} fgColor="#000000" bgColor="#ffffff"    viewBox={`0 0 64 64`}  />
            </div>  </>);
    }
    
    return (<>
        <div className="flex justify-center h-1/2  mt-20 ">
        <div className="absolute bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-xl p-1">
            <div className=" rounded-xl relative bg-white p-3 content-center">

                {showLoader?<Loader></Loader>:<GeneratedURL></GeneratedURL>}
             


            </div>
            </div>
        </div>
    </>);



}

export default Showurl;