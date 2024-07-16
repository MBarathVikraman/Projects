from pytube import YouTube
import tkinter as tk
from tkinter import filedialog

def download_video(url, savepath):
    try:
        yt=YouTube(url)
        streams=yt.streams.filter(progressive=True, file_extension="mp4")
        highest_res_stream = streams.get_highest_resolution()
        highest_res_stream.download(output_path=savepath)
        print("done")
    except Exception as e:
        print(e)

def open_file_dialog():
    folder=filedialog.askdirectory()
    if folder:
        print(f"Chosen Folder: {folder}")
    return folder

if __name__=="__main__":
    root=tk.Tk()
    root.withdraw()

    video_url=input("Enter a Youtube video url: ")
    path_name=open_file_dialog()

    if path_name:
        print("Starting Download...")
        download_video(video_url,path_name)
    else:
        print("Invalid Save Location")