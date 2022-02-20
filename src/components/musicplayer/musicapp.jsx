import './musicapp.css';
import React from "react";
import ReactPlayer from 'react-player/youtube';


const stations = [{
    url: 'https://www.youtube.com/watch?v=Ya3WXzEBL1E',
    label: 'Live Appalachia'
},
{
    url: 'https://www.youtube.com/watch?v=f25HSw7_2oU',
    label: 'Fallout Music and Tales'
},
{
    url: 'https://www.youtube.com/watch?v=5qap5aO4i9A',
    label: 'Lofi Beats'
},
{
    url: 'https://www.youtube.com/watch?v=h0sdHq20ILM',
    label: 'Shanties'
},
{
    url: 'https://www.youtube.com/watch?v=I-cC3wSKAGk',
    label: 'Witcher'
}]
  const SelectMusic = () => {
    const [stationUrl, setStationUrl] = React.useState(stations[0].url)
    const [playing, setPlaying] = React.useState(false)
   
    
    return (
      <>
      <div className='wrapper'>
        <ReactPlayer className="player"
          width='20%'
          height='100%'
          url={stationUrl}
          playing={playing}
          controls
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          />
          <div className='stations'>
          {stations.map(({url, label}, index)=>  <button className='btn' key={index} onClick={() => setStationUrl(url)}>{label}</button>)}
          </div>
          </div>
      </>
    )
  }


export default SelectMusic;