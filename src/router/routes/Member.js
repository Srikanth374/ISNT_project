import { lazy } from 'react'


const MemberRoutes = [
  
  {
    path: '/member/course',
    component: lazy(() => import('../../views/member/course'))
  },
  {
    path: '/member/announcement',
    component: lazy(() => import('../../views/member/announcement'))
  },
  {
    path: '/member/account-settings',
    component: lazy(() => import('../../views/member/account-settings'))
  },
  {
    path: '/member/contactus',
    component: lazy(() => import('../../views/member/contactus'))
  },
  {
    path: '/member/events',
    component: lazy(() => import('../../views/member/events'))
  }
 
]

export default MemberRoutes
