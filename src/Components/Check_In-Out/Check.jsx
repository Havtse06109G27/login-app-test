import React, { useState } from "react";
import axios from "../../API/axios";

function Check(acesstoken) {
  const [checkSuccess, setCheckSuccess] = useState("");

  const handleCheck = async () => {
    let data = {
      status: "check_in",
    };
    try {
      const res = await axios.post("/timer", data);
      setCheckSuccess("Check in success");
    } catch (error) {
      setCheckSuccess("Check in error");
    }
  };
  console.log(acesstoken);
  return (
    <div>
      <button onClick={() => handleCheck()}>Check In</button>
    </div>
  );
}

export default Check;
