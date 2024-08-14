# YouTube Video Downloader

## Overview

This project is a full-stack application that allows users to download YouTube videos. It consists of:

- **Frontend**: A web application built with Vite, React, and TypeScript.
- **Backend**: A REST API built with Python and Flask that handles the video downloading process.

## Features

- **Frontend**: Provides a user interface to input a YouTube video URL and initiate the download process.
- **Backend**: Receives the video URL from the frontend, downloads the video using the `pytubefix` library, and serves the file for download.

## Getting Started

Follow the steps below to set up and run both the frontend and backend components of the project.

### Prerequisites

- **Node.js** (for the frontend)
- **Python 3.x** (for the backend)
- **pip** (for Python package management)
- **Virtualenv** (recommended for Python virtual environments)

### Setup Instructions

#### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-directory>
```

Replace `<repository-url>` with the URL of your Git repository and `<repository-directory>` with the name of the directory created by cloning the repository.

#### 2. Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install the frontend dependencies using npm:

   ```bash
   npm install
   ```

3. Start the frontend development server:

   ```bash
   npm run dev
   ```

   The frontend application will be available at `http://localhost:3000`.

#### 3. Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Create and activate a virtual environment:

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

3. Install the backend dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Start the backend server:

   ```bash
   python app.py
   ```

   The backend API will be available at `http://127.0.0.1:5000`.

### Usage

1. Open the frontend application in your browser (`http://localhost:5173`).
2. Enter the URL of the YouTube video you want to download in the input field and click "Download."
3. The modal will appear, displaying the video's thumbnail and title. Click "Download" to start downloading the video.

### Folder Structure

```
.
├── backend
│   ├── app.py              # Main Flask application file
│   ├── requirements.txt    # Python dependencies
│   ├── downloads           # Directory where downloaded files are stored
│   └── ...
├── frontend
│   ├── src                 # Source code for the React application
│   ├── public              # Public assets
│   ├── index.html          # HTML file
│   ├── vite.config.ts      # Vite configuration
│   └── ...
└── README.md               # This file
```

### Contributing

Contributions are welcome! If you find any issues or have suggestions, please open an issue or submit a pull request.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Contact

For any questions or further information, feel free to reach out at adetona67@gmail.com or on my tech instagram Tona_Tech.

---

This `README.md` provides a clear overview of the project, setup instructions, and usage guidelines, making it easier for others to understand and contribute to the project.
