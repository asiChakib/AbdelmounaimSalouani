import cv2

def extract_frame(video_path, output_image_path, frame_number=None, timestamp=None):

    cap = cv2.VideoCapture(video_path)
    
    if not cap.isOpened():
        print("Error: Could not open video.")
        return
    
    if frame_number is not None:
        cap.set(cv2.CAP_PROP_POS_FRAMES, frame_number)
    elif timestamp is not None:
        fps = cap.get(cv2.CAP_PROP_FPS)
        frame_number = int(timestamp * fps)
        cap.set(cv2.CAP_PROP_POS_FRAMES, frame_number)
    else:
        print("Error: You need to specify either a frame number or a timestamp.")
        cap.release()
        return

    # Read the frame
    success, frame = cap.read()
    
    if success:
        # Save the frame as an image
        cv2.imwrite(output_image_path, frame)
        print(f"Frame extracted and saved as {output_image_path}")
    else:
        print("Error: Could not retrieve frame. Check the frame number or timestamp.")
    
    # Release the video capture object
    cap.release()

# Usage
video_path = './video.avi'       # Path to the video file
output_image_path = 'extracted_frame.jpg'  # Path to save the extracted image
frame_number = 100                   # Extract the 100th frame (example)
timestamp = None                     # Alternatively, use a timestamp in seconds, e.g., 5.0

extract_frame(video_path, output_image_path, frame_number=frame_number, timestamp=timestamp)
