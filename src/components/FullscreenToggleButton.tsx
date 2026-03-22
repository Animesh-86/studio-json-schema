import { useContext } from "react";
import { BiFullscreen } from "react-icons/bi";
import { AppContext } from "../contexts/AppContext";

const FullscreenToggleButton = () => {
  const { toggleFullScreen } = useContext(AppContext);

  return (
    <button
      onClick={toggleFullScreen}
      className="cursor-pointer"
      style={{ color: "var(--navigation-text-color)" }}
    >
      <BiFullscreen size={23} />
    </button>
  );
};

export default FullscreenToggleButton;
