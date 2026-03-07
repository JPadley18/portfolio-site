export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === from.path) {
    return;
  }

  const routeOrder = ['/', '/projects', '/achievements'];

  let transition;

  if (!routeOrder.includes(to.path)) {
    // If we are navigating to an 'inner' page, always slide left
    transition = 'slide-left';
  } else if (!routeOrder.includes(from.path)) {
    // Likewise, if we are navigating from an 'inner' page, always slide right
    transition = 'slide-right';
  } else {
    // Otherwise, work out which direction to slide in
    const toIdx = routeOrder.indexOf(to.path);
    const fromIdx = routeOrder.indexOf(from.path);

    transition = toIdx > fromIdx ? 'slide-left' : 'slide-right';
  }

  to.meta.pageTransition = {
    name: transition,
    mode: 'out-in',
  };
  from.meta.pageTransition = {
    name: transition,
    mode: 'out-in',
  };
});
