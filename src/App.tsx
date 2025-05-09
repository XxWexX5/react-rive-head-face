import { useRive } from "@rive-app/react-canvas";

const STATE_MACHINE_NAME = "State Machine 1";

export function App() {
  const { RiveComponent } = useRive({
    src: "src/assets/character_man.riv",
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#ADD4DE]">
      <div className="w-full h-full relative z-50">
        <RiveComponent />
      </div>

      <div className="absolute w-full inset-0 bg-[radial-gradient(circle,white_0%,transparent_45%)] pointer-events-none" />
    </div>
  );
}
