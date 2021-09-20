
import React, { useState } from "react";



function Header(){

  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  setInterval(updateTime, 1000);
    return (
      <header class="mb-auto">
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="container-fluid">
      <h3 class="ramzinav float-md-start mb-0">RamziAbuAklien</h3>
      <h5 class="ramzinav">Time: {time}</h5>
     <a class="nav-link active" aria-current="page" href="../home.html">Home</a>
        <a class="nav-link" href="../about.html">About</a>
        <a class="nav-link" href="../index.html">BMI</a>
        </div>
  </nav>
</header>
    )
}

export default Header;