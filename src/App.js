import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);

  const fetchData = async () => {
    fetch("https://picsum.photos/v2/list?page=2&limit=10")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  };

  const handleNext = () => {
    return setIndex((index + 1) % data.length);
  };

  const handlePrev = () => {
    return setIndex((index - 1 + data.length) % data.length);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        {data.length > 0 && (
          <img
            key={data[index].id}
            src={data[index].download_url}
            width={400}
          ></img>
        )}
      </div>
      <div>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
      {/*data.length > 0 &&
        data.map((item) => {
          return <img key={item.id} src={item.download_url} width={200}></img>;
        })*/}
    </div>
  );
}
