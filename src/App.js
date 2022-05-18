import "./styles.css";
import Page from "./Page";
import Footer from "./Footer";
import { useState } from "react";
import axios from "axios";
import { db } from "./Firebase";
import { ref, set } from "firebase/database";

var a;

export default function App() {
  const [humidity, setHumidity] = useState(0);
  const [temp_c, setTemp_c] = useState(0);
  const [temp_f, setTemp_f] = useState(0);
  if (humidity != null && temp_c != null && temp_f != null) {
    a = "Healthy";
  } else {
    a = "Error";
  }
  axios
    .get(
      "https://api.thingspeak.com/channels/1642322/fields/1.json?api_key=OM8408FB0BTJWYTX&results=2"
    )
    .then((res) => {
      setHumidity(res.data.feeds[0].field1);
    });
  axios
    .get(
      "https://api.thingspeak.com/channels/1642322/fields/2.json?api_key=OM8408FB0BTJWYTX&results=2"
    )
    .then((res) => {
      setTemp_f(res.data.feeds[0].field2);
    });
  axios
    .get(
      "https://api.thingspeak.com/channels/1642322/fields/3.json?api_key=OM8408FB0BTJWYTX&results=2"
    )
    .then((res) => {
      setTemp_c(res.data.feeds[0].field3);
    });
  axios
    .get(
      "https://api.thingspeak.com/channels/1642322/fields/4.json?api_key=OM8408FB0BTJWYTX&results=2"
    )
    .then((res) => {
      //console.log(res.data.feeds[0].field4);
    });

  return (
    <>
      <div className="App">
        <Page humidity={humidity} temp_c={temp_c} temp_f={temp_f} text={a} />
        <div>
          <button className="btn-on" onClick={() => button(1)}>
            Motor On
          </button>
          <> </>
          <button className="btn-off" onClick={() => button(0)}>
            Motor Off
          </button>
          <> </>
          <button className="btn-auto" onClick={() => button(2)}>
            Motor Auto
          </button>
        </div>

        <Footer />
      </div>
    </>
  );
}

function button(e) {
  //firebase
  set(ref(db), {
    e,
  });
  console.log(e);
}
