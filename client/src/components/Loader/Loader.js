import { Oval } from "react-loader-spinner";

export default function Loader() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Oval
        ariaLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={5}
        color="orangered"
        secondaryColor="blue"
      />
    </div>
  );
}
