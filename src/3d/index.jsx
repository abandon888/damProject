import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useEffect, useRef } from 'react'
import './index.css'

const ThreeD = () => {
  const mount = useRef(null)
  //   const modelUrl = 'https://github.com/abandon888/damProject/blob/e37daa6bebbc7c97c6d1738e4e00a3a490af596a/src/assets/dam_on_the_river/scene.gltf';
  // const corsProxy = 'https://cors-anywhere.herokuapp.com/';
  // const proxiedUrl = corsProxy + modelUrl;

  useEffect(() => {
    const loader = new GLTFLoader()
    loader.load(
      '../assets/dam_on_the_river',
      (gltf) => {
        const scene = gltf.scene
        const camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        )
        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight)
        mount.current.appendChild(renderer.domElement)
        const animate = function () {
          requestAnimationFrame(animate)
          renderer.render(scene, camera)
        }
        animate()
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
      },
      (error) => {
        console.log('An error happened', error)
      }
    )
  }, [])

  return (
  <div ref={mount} id="canvas-container"></div>
  
  )
}

export default ThreeD
