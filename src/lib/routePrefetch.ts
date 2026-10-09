type RouteLoader = () => Promise<unknown>

const routeLoaders: Record<string, RouteLoader> = {
  '/projects/aigc-creative-practice': () => import('../pages/projects/AigcPage'),
  '/projects/idea-tree': () => import('../pages/projects/IdeaPage'),
  '/projects/odor-land': () => import('../pages/projects/OdorPage'),
  '/projects/pals-go': () => import('../pages/projects/PalsPage'),
  '/projects/perfume-lab': () => import('../pages/projects/PerfumePage'),
}

const prefetchedRoutes = new Set<string>()

/** Start loading a project route before the click commits navigation. */
export function prefetchRoute(path: string) {
  const load = routeLoaders[path]
  if (!load || prefetchedRoutes.has(path)) return

  prefetchedRoutes.add(path)
  void load().catch(() => {
    // Allow a later hover to retry if the network request was interrupted.
    prefetchedRoutes.delete(path)
  })
}
