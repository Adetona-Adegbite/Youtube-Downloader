import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

interface ModalProps {
  onClose: () => void;
  name: string;
  thumbnail: string;
  file_path: string;
}

const Modal: React.FC<ModalProps> = ({
  onClose,
  name,
  thumbnail,
  file_path,
}) => {
  const downloadHandler = async () => {
    console.log(file_path);

    try {
      const response = await fetch(`http://127.0.0.1:5000/files/${file_path}`);
      if (!response.ok) throw new Error("Download failed");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = file_path;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download error:", error);
    } finally {
      onClose();
    }
  };
  return ReactDOM.createPortal(
    <div className={classes.backdrop} onClick={onClose}>
      <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
        <img src={thumbnail} />
        <p>{name}</p>
        <button onClick={downloadHandler}>Download</button>
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
