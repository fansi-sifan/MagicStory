import React, { useRef, useEffect } from 'react';

  const CameraComponent = ({ onCapture }) => {
 
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Request access to the user's camera
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch(error => {
          console.log('Error accessing camera:', error);
        });
    } else {
      console.log('getUserMedia not supported in this browser.');
    }
  }, []);

  const captureImage = () => {
// Capture the current video frame and display it on the canvas
    const videoElement = videoRef.current;
    const canvasElement = canvasRef.current;

    if (videoElement && canvasElement) {
      const context = canvasElement.getContext('2d');
      context.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);
      
      // Convert the captured image to data URL and call the prop with it
      const imageData = canvasElement.toDataURL("image/png");
      onCapture(imageData);
    }
  };

 

  return (
    <div className="camera-component">
      <video ref={videoRef} autoPlay playsInline width="300" height="225"></video>
      <button onClick={captureImage} className="capture-button">Capture Image</button>
      <canvas ref={canvasRef} width="300" height="225"></canvas>

      <style jsx>{`
        .camera-component {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .capture-button {
          padding: 0.5rem 1rem;
          background-color: #3498db;
          color: white;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .capture-button:hover {
          background-color: #2980b9;
        }
      `}</style>
    </div>
  );
}

export default CameraComponent;
