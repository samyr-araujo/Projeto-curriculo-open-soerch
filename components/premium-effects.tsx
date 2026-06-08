'use client';

import { ParticlesBackground, FloatingOrbs, GridPattern } from './particles-bg';
import { ScrollProgress } from './scroll-progress';
import { CursorGlow } from './cursor-glow';

export function PremiumEffects() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <GridPattern />
      <FloatingOrbs />
      <ParticlesBackground />
    </>
  );
}
