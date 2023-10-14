import { Particle } from './particle.type';
import { Particles } from './particles.type';

export type AnimateFunctionArgs = {
  root: Element;
  particles: Particles;
  decay: number;
  lifetime: number;
  updateParticle: (particle: Particle, progress: number, decay: number) => void;
  onFinish: () => void;
};
