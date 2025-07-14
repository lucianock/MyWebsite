// CustomModal.js
import useMediaQuery from "@/hooks/useMediaQuery";
import Modal from "react-modal";

Modal.setAppElement("#__next");

const CustomModal = ({
  isOpen,
  onRequestClose,
  children,
  containsImageExtension,
}) => {
  const isMobile = useMediaQuery("(max-width: 592px)");

  const customStyles = {
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: containsImageExtension ? "transparent" : "black",
      // padding: '20px',
      borderRadius: "3px",
      maxWidth: containsImageExtension ? "100%" : "100%",
      // maxHeight: '80%',
      height: "55%",
      width:
        (containsImageExtension || (isMobile && !containsImageExtension)) &&
        "100%",
      overflow: "hidden",
      border: "none",
      padding: 0,
    },
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      zIndex: "1000",
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      {children}
    </Modal>
  );
};

export default CustomModal;
