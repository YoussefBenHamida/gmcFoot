import React from 'react'
const TEXT = {
  textAlign: "center",
  color: "white",
  paddingTop:"10%"
};

function Home() {
  return (
    <>
     <div style={{backgroundImage: 'linear-gradient(35deg, rgb(12, 13, 44) 1%, #1f2127 50%, #1f2127 70%, #1f2127 70%, #474a51 100%)', height:"1400px"}}>
     <img src="/images/Terrain4.jpg" alt="Description" style={{ width: '700', height:"700px" }} />

      <main style={TEXT}>
          <h1>Du désir au terrain, un clic suffit.</h1>
          <h1>Jouons!</h1>
        </main>
    </div>


    </>

  )
}

export default Home