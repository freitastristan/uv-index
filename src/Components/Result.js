export default function Result(props) {
  console.log(props);
  let uvIndex = {};
  if (props.coords) {
    getUVIndex(props.coords).then((data) => {
      console.log(data);
      uvIndex = data.result;
      console.log(uvIndex.uv);
    });
  }
  async function getUVIndex(coords) {
    let getIndex = await fetch(`https://api.openuv.io/api/v1/uv?lat=${coords.latitude}&lng=${coords.longitude}`, {
      method: "GET",
      headers: {
        "x-access-token": process.env.REACT_APP_UV_INDEX_API_KEY,
      },
    });
    const json = await getIndex.json();
    return json;
  }
  return (
    <div className="result">
      <p>
        Place: {props.coords.latitude} | {props.coords.longitude}
      </p>
      <p>UV Index: {uvIndex.uv}</p>
      <p>Current Temp:</p>
    </div>
  );
}
