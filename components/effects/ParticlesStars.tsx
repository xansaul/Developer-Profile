import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const ParticlesStars = () => {
    const particlesInit = useCallback(async (engine:any) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container:any) => {
        await null
    }, []);

    return (
      <div>
      <Particles
        className="absolute"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: '#00012C',
            },
          },
          fullScreen:{
            enable:true,
            zIndex:-1
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: ['#AFC1EF', '#6685D3'],
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: .07,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 600,
              },
              value: 120,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 2.5 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
    );
};