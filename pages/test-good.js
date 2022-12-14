import React from 'react'
import ReactPlayer from 'react-player'

export default function Index() {
  const [isPlaying, setIsPlaying] = React.useState(true)
  const [isReady, setIsReady] = React.useState(false)
  const playerRef = React.useRef()

  const onReady = React.useCallback(() => {
    if (!isReady) {
      const timeToStart = 0
      playerRef.current.seekTo(timeToStart, 'seconds')
      setIsReady(true)
    }
  }, [isReady])

  const jumptoTime = (time, id) => {
    playerRef.current.seekTo(time, 'seconds')
    setIsReady(true)
    console.log(id)
  }

  return (
    <>
      <ReactPlayer
        ref={playerRef}
        url="https://www.youtube.com/watch?v=gSMRibXngP8"
        playing={isPlaying}
        height="210px"
        width="440px"
        controls={true}
        onReady={onReady}
      />
      <br />
      <br />

      <h2>FBI agent explains Anonymous hacker group</h2>
      <div>
        Click on a part of the transcription, to jump to its video, and get an anchor to it in the
        address bar
        <br />
        <br />
      </div>
      <div>
        <h3 style={{ fontSize: '22px', fontWeight: 'bold', paddingBottom: '5px' }}>Fridman</h3>
        <a id="00:00:03.020" className="lt" onClick={() => jumptoTime(3, '00:00:03.020')}>
          Let me ask you about your now friend. Can we go as far as to say his friend? In Sabu,
        </a>
        <a id="00:00:09.820" className="lt" onClick={() => jumptoTime(9, '00:00:09.820')}>
          Hector Monsegur. What's the story? What's your long story with him? Can you tell me about
        </a>
      </div>
      <div style={{ paddingTop: '25px' }}>
        <h3 style={{ fontSize: '22px', fontWeight: 'bold', paddingBottom: '1px' }}>Tarbell</h3>
        <br />
        <a id="00:00:28.180" className="lt" onClick={() => jumptoTime(28, '00:00:28.180')}>
          Probably anonymous. Anonymous is a was a DC. It still is I guess a decentralized
          organization
        </a>
        <a id="00:00:34.940" className="lt" onClick={() => jumptoTime(34, '00:00:34.940')}>
          They call themselves headless, but once you look into them a little ways, and they're not
          really headless
        </a>
      </div>
    </>
  )
}
