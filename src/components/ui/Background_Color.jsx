import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Background_Color = () => {
  const color = "rgb(14, 14, 23)";

  const backgroundImage = `linear-gradient(to bottom, rgb(2, 9, 40) 10%, ${color} 24%,rgb(2, 9, 40) 130%)`;
  return (
    <section
      style={{
        backgroundImage,
      }}
      className="absolute inset-0 z-0 bg-gray-950 px-4 py-24 text-gray-200"
    >
      <div className="absolute top-0 left-0 w-full h-1/2">
        <Canvas>
          <Stars radius={50} count={2000} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </section>
  );
};

export default Background_Color;
