import { ParticlePhysics } from './particle-physics.type';

export interface Particle {
  element: HTMLSpanElement;
  physics: ParticlePhysics;
}
