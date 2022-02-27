import styled from 'styled-components';
import React from "react";
import ReactPlayer from 'react-player/youtube';


const PlayerContainer = styled.div `
    background-color: ${({theme})=> theme.playerBackground};
    display: flex;
    flex-direction: column-reverse;
    border: 2px solid black;
    border-style: inset;
    border-radius: 40px;
    padding: 2px;
    justify-content: center;
    margin: 2px;
  `;

  const StationsStyles = styled.div `
    display: flex;
    align-self: center;
    flex-direction: column;
    margin: 2px;
    padding: 2px;
    width: 75%;
  
  `;


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
      <div style={{display:'flex', flexDirection: 'row-reverse', paddingRight:'5px'}}>
        <PlayerContainer>
        <ReactPlayer style={{display:'flex', alignSelf: 'center', padding: '5px'}}
          width='80%'
          height='100%'
          url={stationUrl}
          playing={playing}
          controls= 'true'
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          />
          <StationsStyles>
          {stations.map(({url, label}, index)=>  <button className='btn' key={index} onClick={() => setStationUrl(url)}>{label}</button>)}
          </StationsStyles>
          </PlayerContainer>
          </div>
      </>
    )
  }


export default SelectMusic;