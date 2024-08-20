import os
from flask import Flask, request, jsonify, send_from_directory
from pytubefix import YouTube
from pytubefix.cli import on_progress
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DOWNLOAD_FOLDER = os.path.join(BASE_DIR, 'downloads')
if not os.path.exists(DOWNLOAD_FOLDER):
    os.makedirs(DOWNLOAD_FOLDER)
    print('folder created')

def remove_space(filename):
    return filename.replace(" ", "")


@app.route('/')
def hello_world():
    return '<h1>Hello World</h1>'

@app.route("/download", methods=['POST'])
def video_downloader():
    data = request.json
    url = data.get('url')
    print(url)
    if not url:
        return jsonify({'error': 'No URL provided'}), 400
    try:
        yt = YouTube(url, on_progress_callback=on_progress)
        print(yt.title)
        ys = yt.streams.get_highest_resolution()
        file_path = ys.download(output_path=DOWNLOAD_FOLDER)
        filename = remove_space(os.path.basename(file_path))
        no_space_file_path = os.path.join(DOWNLOAD_FOLDER, filename)
        print("Download complete.")
        os.rename(file_path, no_space_file_path)

        return jsonify({'message': 'Download completed successfully.', 'file_path': filename,'thumbnail':yt.thumbnail_url,'title':yt.title})
    except Exception as e:
        print(e)
        return jsonify({'error': str(e)}), 500


@app.route('/files/<path:filename>', methods=['GET'])
def get_file(filename):
    print(filename)
    return send_from_directory(DOWNLOAD_FOLDER, filename, as_attachment=True)


if __name__ == "__main__":
    app.run(debug=True)
