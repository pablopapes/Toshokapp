import React from 'react'
import { useParams } from 'react-router-dom'

const PlaylistPage = () => {
  let { id } = useParams()

  return (
    <div className="playlistPage">
      <div className="mainInner">
        <div className="playlistPageInfo">
          <div className="playlistPageImage">
            <img
              src="https://images.unsplash.com/photo-1587201572498-2bc131fbf113?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=924&q=80"
              alt="pic"
            />
          </div>
          <h1>Title</h1>
          <p>Spotify</p>
          <button>Play</button>
          <div className="icons">
            <div className="iconsHeart"></div>
            <div className="iconsDots"></div>
          </div>
          <p>Minimalism, electronica and modern classical to concentrate to.</p>
        </div>
        <div className="playlistPageSongs">
          <ul>
            <li>Song one</li>
            <li>Song two</li>
            <li>Song three</li>
            <li>Song four</li>
            <li>Song five</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PlaylistPage
