import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Main.css';

function Main() {
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/youtube");
        setVideoData(response.data); // Assuming the response contains the data you need
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Dependency array ensures the effect runs when the component mounts

  return (
    <div  style={{ 
      display: 'flex', 
      overflowY: 'scroll', 
      height: '60vh', 
      whiteSpace: 'nowrap', 
      gap:"11px",
      justifyContent: 'space-around', 
      flexWrap: 'wrap', 
      marginTop: '75px' 
      }}>
      {videoData ? (
        videoData.map(video => (
          <div key={video.id} style={{gap:"15px", marginBottom:"20px" }}>
            <video muted autoPlay style={{ marginBottom: '8px' }}>
              <source src={video.video_file} type="video/mp4"></source>
            </video>
            <p className='video-title'>{video.title}</p>
            <p className='video-author'>{video.channel}</p>
            <p className='video-views'>{video.views} views</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Main;
