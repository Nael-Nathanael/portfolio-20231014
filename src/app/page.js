"use client"

import {useEffect, useState} from "react";

export default function Page() {
  const [side, setSide] = useState("PROFESSIONAL")
  useEffect(() => {
    const handleSpacebarClick = (event) => {
      if (event.key === ' ' || event.key === 'Spacebar') {
        doSwitch();
      }
    };

    document.addEventListener('keydown', handleSpacebarClick);

    return () => {
      document.removeEventListener('keydown', handleSpacebarClick);
    };
  }, [side]);

  function doSwitch() {
    if (side === "PROFESSIONAL") {
      setSide("GAMING")
    } else {
      setSide("PROFESSIONAL")
    }
  }

  return (
    <div className={"w-100 overflow-x-clip"}>
      <div className={"d-flex overflow-hidden"}
           style={{width: "200vw", transform: side === "GAMING" ? "translateX(-50%)" : ""}}>
        <main className={"w-100 overflow-auto"} style={{maxHeight: "100vh"}}>
          <div className="min-vh-100 bg-light text-dark w-100 d-flex justify-content-center align-items-center flex-column h1 mb-0">
            Professional
            <button type={"button"} onClick={doSwitch} className={"btn btn-sm btn-dark"}>
              Go to Gaming Side
            </button>
          </div>
          <div className="container py-4">
            A professional site content
          </div>
        </main>

        <main className={"w-100 overflow-auto"} style={{maxHeight: "100vh"}}>
          <div className="min-vh-100 bg-dark text-light w-100 d-flex justify-content-center align-items-center flex-column h1 mb-0">
            Gaming
            <button type={"button"} onClick={doSwitch} className={"btn btn-sm btn-light"}>
              Go to Professional Side
            </button>
          </div>
          <div className="container py-4">
            This is a long as gaming div container
            This is a long as gaming div container
            This is a long as gaming div container
            This is a long as gaming div container
            This is a long as gaming div container
            This is a long as gaming div container
            This is a long as gaming div container
            This is a long as gaming div container
            This is a long as gaming div container
            This is a long as gaming div container
            This is a long as gaming div container
            This is a long as gaming div container
            This is a long as gaming div container
            This is a long as gaming div container
            This is a long as gaming div container
            This is a long as gaming div container
            This is a long as gaming div container
            This is a long as gaming div container
            This is a long as gaming div container
            This is a long as gaming div container
            This is a long as gaming div container
            This is a long as gaming div container
            This is a long as gaming div container
            This is a long as gaming div container
            This is a long as gaming div container
            This is a long as gaming div container
            This is a long as gaming div container
            This is a long as gaming div container
            This is a long as gaming div container
            This is a long as gaming div container
            This is a long as gaming div container
            This is a long as gaming div container
            This is a long as gaming div container
            This is a long as gaming div container
            This is a long as gaming div container
          </div>
        </main>
      </div>
    </div>
  )
}