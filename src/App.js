import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import {
  AiOutlineReload,
  AiOutlineCheck,
  AiOutlineClose,
} from "react-icons/ai";

function App() {
  const [isLoading, setLoading] = useState("true");
  const [succeeded, setSucceeded] = useState("");

  const loadingChange = () => {
    setSucceeded("");
    setLoading("false");
    axios
      .get("https://reqres.in/api/user")
      .then((res) => {
        if (res.status === 201 || 200) {
          setTimeout(() => {
            setLoading("");
            setSucceeded("success");
          }, 2000);
        }
        console.log(res.status);
      })
      .catch((res) => {
        setTimeout(() => {
          setLoading("");

          setSucceeded("failed");

          setTimeout(() => {
            setLoading("true");
            setSucceeded("");
          }, 2000);
        }, 2000);
      });
  };

  return (
    <div className="App">
      <button
        onClick={loadingChange}
        className="btn"
        disabled={succeeded === "success"}
      >
        {isLoading === "false" && <AiOutlineReload className="hello" />}
        {isLoading === "true" && "click"}
        {succeeded === "success" && <AiOutlineCheck className="success" />}
        {succeeded === "failed" && <AiOutlineClose className="failed" />}
      </button>
    </div>
  );
}

export default App;
