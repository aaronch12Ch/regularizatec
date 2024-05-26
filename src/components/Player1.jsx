'use client'
import React from 'react'
import Player from "@madzadev/audio-player";


const Player1 = () => {
  
  const tracks = [
    {
      url: "https://proyectotopicos22.000webhostapp.com/audio1naruto.mp3",
      title: "Capitulo1",
      tags: ["Temporada1"],
    },
    {
      url: "https://proyectotopicos22.000webhostapp.com/podcast2.mp3",
      title: "Capitulo2",
      tags: ["Temporada1"],
    },
    /*{
      url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
      title: "Madza - Persistence",
      tags: ["dubstep"],
    },*/
  ];
  return (
    <section>
      <h1 className='text-white'>
        <Player
          trackList = {tracks}
          autoPlayNextTrack={true}
          includeTags={true}
          
        />
      </h1>
    </section>
  )
}

export default Player1