import React, { useState } from "react";
import classes from "./App.module.css";
import backgroundImage from "../src/assets/background-image.jpg";
import icon from "../src/assets/icon.png";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLink,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa6";
import Modal from "./components/Modal";

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [url, setUrl] = useState("");
  const [videoData, setVideoData] = useState<{
    title: string;
    thumbnail: string;
    file_path: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleDownloadClick = async () => {
    if (url) {
      setLoading(true);

      try {
        const response = await fetch("http://127.0.0.1:5000/download", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url }), // Send url as an object
        });

        const data = await response.json();
        console.log(data);

        if (response.ok) {
          setVideoData({
            title: data.title,
            thumbnail: data.thumbnail,
            file_path: data.file_path,
          });
          setShowModal(true);
        } else {
          console.error(data.error);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      } finally {
        setLoading(false);
      }
    }
  };
  const closeModal = () => {
    setShowModal(false);
    setVideoData(null);
  };

  return (
    <div className={classes.page}>
      <div className={classes.container}>
        <div className={classes["bg-image"]}>
          <img src={backgroundImage} alt="Background" />
        </div>
        <div className={classes.navbar}>
          <img src={icon} alt="Icon" />
          <p>
            <span style={{ fontWeight: "bold", fontSize: 20 }}>Video</span>{" "}
            Downloader
          </p>
        </div>
        <div className={classes["main-content"]}>
          <p className={classes.header1}>YouTube Video</p>
          <p className={classes.header2}>Downloader</p>
          <p className={classes.description}>
            Are you looking to download
            <a
              style={{
                color: "#ef626c",
                paddingLeft: 5,
                paddingRight: 5,
                fontWeight: "bold",
              }}
              href="http://www.youtube.com"
            >
              YouTube
            </a>
            videos for free? Look no further. Enter the link to the YouTube
            video below and download it in its highest quality.
          </p>
          <div className={classes.inputBox}>
            <FaLink className={classes.icon} />
            <input
              placeholder="Insert YouTube Video Link Here..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button onClick={handleDownloadClick}>Download</button>
          </div>
        </div>
      </div>
      <div className={classes["contact-container"]}>
        <h1>Contact Me</h1>
        <p>
          If you use this project or you just like it, don't hesitate to contact
          or follow me on any of these platforms
        </p>
        <div className={classes["social-icons"]}>
          <a
            href="https://www.instagram.com/tona_tech?igsh=MTU0em1jMGl5MnJ0aw%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@tona_tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok />
          </a>
          <a href="mailto:adetona67@gmail.com">
            <FaEnvelope />
          </a>
          <a
            href="www.linkedin.com/in/adetona-adegbite-3a6a7916a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
        <a
          href="https://github.com/Adetona-Adegbite/Youtube-Downloader.git"
          target="_blank"
          rel="noopener noreferrer"
          className={classes["github-button"]}
        >
          Contribute to this Project
          <FaGithub size={32} color="white" />
        </a>
      </div>
      {loading && (
        <div className={classes.loading}>
          <p>Loading...</p>
        </div>
      )}
      {showModal && (
        <Modal
          name={videoData?.title}
          thumbnail={videoData?.thumbnail}
          file_path={videoData?.file_path}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default App;
