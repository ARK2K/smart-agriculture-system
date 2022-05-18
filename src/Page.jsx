import React from "react";

const Page = (props) => {
  const { humidity, temp_c, temp_f, text } = props;
  return (
    <>
      <h1 style={{ color: "brown" }}>Smart Agriculture System</h1>
      <hr size="2" width="70%" color="green"></hr>
      <h2>Arduino with Ethernet Shield </h2>
      <h2>Status: {text}</h2>
      <h2>Humidity:</h2>
      <h3>{humidity} % </h3>
      <h2>Temperature:</h2>
      <h3>{temp_f} °F</h3>
      <h3>{temp_c} °C</h3>
    </>
  );
};

export default Page;
