# garbage-detector-yolov8

Garbage Detector Using YOLOv8
A waste detection project built with Python and YOLOv8 to classify and identify garbage types (e.g., metal, plastic, paper). This project was developed during a two-hour hackathon and will continue to be enhanced.

Features
Detects and classifies waste into different categories.
Uses the YOLOv8 model for high-speed object detection.
Can process images for real-time or batch garbage detection.

Setup and Installation


Clone the repository:

bash
git clone https://github.com/your-username/garbage-detector-yolov8.git
cd garbage-detector-yolov8


Create and activate a virtual environment:


bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate



Install dependencies:


bash
pip install -r requirements.txt


How to Run Train the Model:

Add your dataset (organized into folders like metal, plastic, paper) in the data/ directory.
Train the YOLOv8 model using:

bash
python train_model.py


Make Predictions:
Update the path to the image in predict.py:


python
image_path = "path/to/your/image.jpg"


Run the prediction script:

bash
python predict.py



Project Structure
bash
Copy code
garbage-detector-yolov8/
├── data/                       # Dataset folder
│   ├── metal/
│   ├── plastic/
│   ├── paper/
├── models/                     # Saved YOLOv8 models
│   └── waste_classification_model.h5
├── train_model.py              # Model training script
├── predict.py                  # Prediction script
├── requirements.txt            # Python dependencies
├── README.md                   # Project documentation


Next Steps :

Enhance model accuracy with more diverse datasets.
Add real-time detection using a webcam or video feed.
Deploy the model as a web app using Flask or Streamlit.
Contributing

Feel free to open an issue or submit a pull request if you'd like to contribute.



