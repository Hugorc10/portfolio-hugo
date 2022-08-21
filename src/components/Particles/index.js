import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadStarsPreset } from 'tsparticles-preset-stars';
import particlesJson from './particles.json';

function Particle(props) {
  const { id } = props;

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadStarsPreset(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id={id}
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesJson}
    />
  );
}

export default Particle;
