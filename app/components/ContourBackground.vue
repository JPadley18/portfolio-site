<script setup lang="ts">
import * as d3 from 'd3';
import { createNoise3D } from 'simplex-noise';

const props = defineProps<{
  cellSize: number;
  // Using a larger cell size on mobile helps with performance
  mobileCellSize: number;
  speed: number;
  scale: number;
  strokeWidth: number;
  opacity: number;
  scrollMultiplier: number;
}>();

const getCellSize = () => (window.innerWidth < 768 ? props.mobileCellSize : props.cellSize);

const svgRef = useTemplateRef('svgRef');
const padding = 2;
let animationId = 0;
let handleResize = () => {};

onMounted(() => {
  // Select the component to draw the contours in.
  const svg = d3.select(svgRef.value);

  // Work out the dimensions of the noise cell grid.
  let width = window.innerWidth;
  let height = window.innerHeight;
  let gridWidth = Math.ceil(width / props.cellSize) + 2 * padding;
  let gridHeight = Math.ceil(height / props.cellSize) + 2 * padding;

  // Set up the noise grid.
  const noise = createNoise3D();
  let values = new Float64Array(gridWidth * gridHeight);

  // Time will move forward as the animation continues, and scroll speed will affect animation
  // speed.
  let time = 0;
  let lastScrollY = window.scrollY;
  let currentSpeed = props.speed;
  const scrollSmoothing = 0.05;

  // Initialise the contour renderer.
  const contours = d3.contours().thresholds(d3.range(-1, 1, 0.15));
  const path = d3.geoPath().projection(
    d3
      .geoIdentity()
      .scale(getCellSize())
      .translate([-padding * getCellSize(), -padding * getCellSize()]),
  );

  // Called if the grid is resized.
  const updateGridSize = () => {
    contours.size([gridWidth, gridHeight]);
  };
  updateGridSize();

  // Passively track window scrolling.
  let targetScrollY = window.scrollY;
  window.addEventListener(
    'scroll',
    () => {
      targetScrollY = window.scrollY;
    },
    { passive: true },
  );

  // Render loop.
  const render = () => {
    for (let y = 0, i = 0; y < gridHeight; y++) {
      for (let x = 0; x < gridWidth; x++, i++) {
        values[i] = noise(x / props.scale, y / props.scale, time);
      }
    }

    const contourData = contours(Array.from(values));

    svg
      .selectAll('path')
      .data(contourData)
      .join('path')
      .attr('d', path)
      .attr('fill', 'none')
      .attr('stroke', getComputedStyle(document.documentElement).getPropertyValue('--ui-primary'))
      .attr('stroke-width', props.strokeWidth)
      .attr('opacity', (d, i) => props.opacity + i * 0.001);

    const scrollDelta = Math.abs(targetScrollY - lastScrollY);
    lastScrollY = targetScrollY;

    const targetSpeed = props.speed + scrollDelta * props.scrollMultiplier;

    currentSpeed += (targetSpeed - currentSpeed) * scrollSmoothing;

    time += currentSpeed;
    animationId = requestAnimationFrame(render);
  };

  handleResize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    gridWidth = Math.ceil(width / getCellSize()) + 2 * padding;
    gridHeight = Math.ceil(height / getCellSize()) + 2 * padding;
    values = new Float64Array(gridWidth * gridHeight);
    updateGridSize();
  };

  window.addEventListener('resize', handleResize);

  render();
});

// Clean up listeners and animation loops when navigating away
onBeforeUnmount(() => {
  if (animationId) cancelAnimationFrame(animationId);
  if (handleResize) window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <div
    class="fixed inset-0 -z-10 w-full h-full overflow-hidden bg-background-light dark:bg-background"
  >
    <svg ref="svgRef" class="w-full h-full block" />
  </div>
</template>
