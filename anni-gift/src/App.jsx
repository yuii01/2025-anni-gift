import './index.css'  // keep or remove as you like
import './app.css'    // keep or remove as you like

import React, { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Float, Sparkles, Html, useGLTF } from '@react-three/drei'

function FloatingModel() {
  const { scene } = useGLTF('/models/letters.glb')

  useEffect(() => {
    console.log('✅ GLTF loaded:', scene)
  }, [scene])

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <primitive object={scene} scale={10} />
    </Float>
  )
}

function IntroScene({ onComplete }) {
  useEffect(() => {
    const timeout = setTimeout(() => onComplete(), 5000)
    return () => clearTimeout(timeout)
  }, [onComplete])

  return (
    <Canvas camera={{ position: [0, 0, 100], fov: 50 }}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <Sparkles count={300} speed={1.5} size={2} scale={[10, 10, 10]} color="white" />
      <Environment preset="sunset" background={false} />
      <Suspense fallback={<Html><p>Loading...</p></Html>}>
        <FloatingModel />
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  )
}

function MessageCard({ message }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="message-card" onClick={() => setFlipped(!flipped)}>
      <div className={`card-inner ${flipped ? 'flipped' : ''}`}>
        <div className="card-front">
          <p>{message}</p>
        </div>
        <div className="card-back">
          <p>[Image hidden for testing]</p>
        </div>
      </div>
    </div>
  )
}

function MessageBoard() {
  const messages = [
    { message: 'You both are amazing! 💕' },
    { message: 'Happy anniversary!! 🎉' },
    { message: 'So happy for you guys 💖' },
    { message: 'Wishing you endless happiness!' },
    { message: 'Cheers to many more years!' },
    { message: 'Love you both! 💞' },
  ]

  return (
    <div className="message-board">
      <h2>Friend Messages</h2>
      <div className="message-grid">
        {messages.map((msg, idx) => (
          <MessageCard key={idx} {...msg} />
        ))}
      </div>
    </div>
  )
}

export default function AnniversaryScene() {
  const [showBoard, setShowBoard] = useState(false)

  return (
    <div>
      {!showBoard ? (
        <div onClick={() => setShowBoard(true)} style={{ cursor: 'pointer' }}>
          <IntroScene onComplete={() => setShowBoard(true)} />
          <div
            style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none'
            }}
          >
            <p style={{
              color: 'white',
              fontSize: '1.5rem',
              backgroundColor: 'rgba(0,0,0,0.5)',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
            }}>Click anywhere to continue</p>
          </div>
        </div>
      ) : (
        <MessageBoard />
      )}
    </div>
  )
}
