export interface Routes {
  path: string
  title: string
  public?: boolean
  component: React.FC
  children?: Routes[]
}

export function routing(routes: Routes[], path = ''): Routes[] {
  const allRoutes: Routes[] = []
  routes.forEach(({ ...route }) => {
    route.path = [path, route.path].join('')
    if (route.children !== undefined) {
      routing(route.children, route.path)
      Reflect.deleteProperty(route, 'children')
      allRoutes.unshift(route)
    } else {
      allRoutes.push(route)
    }
  })
  return allRoutes
}
