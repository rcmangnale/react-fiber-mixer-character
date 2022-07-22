import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Archer from "./Archer";
import "./styles.css";
function App() {
  const [action, setAction] = useState("Run Forward");
  return (
    <>
      <Canvas camera={{ position: [0, 1, 2] }}>
        <ambientLight />
        <pointLight intensity={2} position={[-1, 1, 3]} color="blue" />
        <pointLight intensity={2} position={[1, 1, 3]} color="red" />
        <pointLight intensity={2} position={[0, 3, -10]} color="black" />
        <Suspense fallback={null}>
          <Archer action={action} />
        </Suspense>
        <OrbitControls target={[0, 1, 0]} />
      </Canvas>
      <div className="controls">
        <button onClick={() => setAction("Standing Idle")}>Standing</button>
        <button onClick={() => setAction("Run Forward")}>Run Forward</button>
        <button onClick={() => setAction("Death")}>Death</button>
        <button onClick={() => setAction("Draw Arrow")}>Draw Arrow</button>
      </div>
    </>
  );
}

export default App;
