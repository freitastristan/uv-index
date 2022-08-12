export default function LocationButton(props) {
  let getLocationPromise = () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  function getLocation() {
    getLocationPromise().then((res) => {
      const { coords } = res;
      // props.setLocation(coords);
      // console.log(coords);
      props.onLocation(coords);
    });
  }

  return <button onClick={getLocation}>Get My Location</button>;
}
