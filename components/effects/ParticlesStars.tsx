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
              value: '#000128',
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
              speed: .1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 130,
            },
            opacity: {
              value: 0.6,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 0.1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
    );
};