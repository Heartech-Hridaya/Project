
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Garbage1(props) {
  const { nodes, materials } = useGLTF('../public/models/garbage1.glb')
  return (
    <group  scale={[0.1, 0.1, 0.1]} position={[0, -2, 0]} {...props} dispose={null}>
      <group position={[-0.387, 53.548, 16.121]} rotation={[0, -1.571, 0]}>
        <group position={[0, 0, -0.387]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box003_wood_all_0.geometry}
            material={materials.wood_all}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box003_wood_front_0.geometry}
            material={materials.wood_front}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box003_wood_rear_0.geometry}
            material={materials.wood_rear}
          />
        </group>
      </group>
      <group position={[0, 4.219, -10.031]} rotation={[0, -1.571, 0]} scale={[1.5, 1.5, 1]}>
        <group position={[0, 0, -15.288]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Cylinder001_wheel_-_gummy_0'].geometry}
            material={materials['wheel_-_gummy']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Cylinder001_wheel_-_plastic_0'].geometry}
            material={materials['wheel_-_plastic']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Cylinder001_wheel_-_steel_0'].geometry}
            material={materials['wheel_-_steel']}
          />
        </group>
      </group>
      <group position={[0, 53.328, -20.467]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_pipe_0.geometry}
          material={materials.pipe}
          position={[0, 0, -0.006]}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object004_3_pipe_holders_0.geometry}
          material={materials['3_pipe_holders']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object004_main_0.geometry}
          material={materials.main}
        />
      </group>
      <group position={[0, 53.328, -20.467]} rotation={[-1.658, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle001_cover_0.geometry}
          material={materials.cover}
          position={[0, -20.506, -1.407]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('../public/models/garbage1.glb')