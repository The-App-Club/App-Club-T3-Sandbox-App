type Route = {
  pathname: string
  headerMenuName: string
}

const routes = [
  {
    pathname: '/',
    headerMenuName: 'Home',
  },
  {
    pathname: '/sample',
    headerMenuName: 'サンプル',
  },
  {
    pathname: '/fallback',
    headerMenuName: 'フォールバック',
  },
  {
    pathname: '/form',
    headerMenuName: 'フォーム',
  },
]

const matchedActivePage = (currentPathname: string): Route | undefined => {
  return routes.find((route: Route) => {
    return (
      route.pathname !== '/' && currentPathname.indexOf(route.pathname) !== -1
    )
  })
}

export {routes, matchedActivePage}
