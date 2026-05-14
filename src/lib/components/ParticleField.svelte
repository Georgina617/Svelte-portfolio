<script lang="ts">
  import { onMount } from 'svelte';
  import { reducedMotion } from '$lib/stores/preferences';

  let canvas: HTMLCanvasElement;
  let reduce = false;
  let pointer = { x: 0.5, y: 0.5 };

  reducedMotion.subscribe((value) => (reduce = value));

  onMount(() => {
    const context = canvas.getContext('2d', { alpha: true });
    if (!context) return;

    let animation = 0;
    let width = 0;
    let height = 0;
    const particles = Array.from({ length: 70 }, (_, index) => ({
      angle: index * 0.62,
      radius: 80 + (index % 11) * 22,
      speed: 0.00025 + (index % 5) * 0.00007,
      size: 1 + (index % 4) * 0.5
    }));

    const resize = () => {
      width = canvas.clientWidth * window.devicePixelRatio;
      height = canvas.clientHeight * window.devicePixelRatio;
      canvas.width = width;
      canvas.height = height;
    };

    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height);
      const cx = width * (0.44 + (pointer.x - 0.5) * 0.08);
      const cy = height * (0.47 + (pointer.y - 0.5) * 0.08);

      context.lineWidth = window.devicePixelRatio;
      particles.forEach((particle, index) => {
        const drift = reduce ? 0 : time * particle.speed;
        const x = cx + Math.cos(particle.angle + drift) * particle.radius * window.devicePixelRatio;
        const y = cy + Math.sin(particle.angle * 1.7 + drift) * particle.radius * 0.52 * window.devicePixelRatio;
        const alpha = 0.35 + (index % 8) * 0.05;

        context.beginPath();
        context.fillStyle = `rgba(115, 247, 178, ${alpha})`;
        context.arc(x, y, particle.size * window.devicePixelRatio, 0, Math.PI * 2);
        context.fill();

        if (index > 0 && index % 3 === 0) {
          const previous = particles[index - 1];
          const px = cx + Math.cos(previous.angle + drift) * previous.radius * window.devicePixelRatio;
          const py = cy + Math.sin(previous.angle * 1.7 + drift) * previous.radius * 0.52 * window.devicePixelRatio;
          context.beginPath();
          context.strokeStyle = 'rgba(143, 183, 255, 0.12)';
          context.moveTo(px, py);
          context.lineTo(x, y);
          context.stroke();
        }
      });

      animation = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animation);
      window.removeEventListener('resize', resize);
    };
  });
</script>

<svelte:window
  onpointermove={(event) => (pointer = { x: event.clientX / innerWidth, y: event.clientY / innerHeight })}
/>

<canvas bind:this={canvas} class="particle-field" aria-hidden="true"></canvas>

<style>
  .particle-field {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0.9;
  }
</style>
