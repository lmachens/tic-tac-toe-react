import "./square.css";
import React, { useState } from "react";

export default function Square() {
  const [value, setValue] = useState(null);
  return (
    <button
      className="square"
      onClick={() => {
        setValue("🐷");
      }}
    >
      {value}
    </button>
  );
}
