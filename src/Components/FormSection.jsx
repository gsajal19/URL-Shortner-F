import { useState } from "react";
import InputForm from "./InputForm";
import Showurl from "./Showurl";
import Loader from "./Loader";

function FormSection() {
  const [showURL, setShowURL] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [URL, setURL] = useState("");
  return (
    <>

      <hr className="text-slate-100 border-2 my-10" />
      <div className="h-screen flex ">
        {/* <div className="inset-0 -z-10 w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div> */}

        <div className=" w-full ">
          <h1 className="text-xl font-semibold text-center my-5">Your Short URL Is One Step Away-</h1>
          <InputForm setShowURL={setShowURL} setURL={setURL} setShowLoader={setShowLoader} showLoader={showLoader}></InputForm>
          {showURL ? <Showurl  URL={URL} showLoader={showLoader}></Showurl> : <></>}
          
        </div>

      </div>

    <label id="drop"></label>

    </>
  );
}

export default FormSection;
