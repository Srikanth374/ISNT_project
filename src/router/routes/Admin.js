import { lazy } from 'react'


const AdminRoutes = [
  
  // {
  //   path: '/member/course',
  //   component: lazy(() => import('../../views/member/course'))
  // },
  // {
  //   path: '/member/announcement',
  //   component: lazy(() => import('../../views/member/announcement'))
  // },
  // {
  //   path: '/member/account-settings',
  //   component: lazy(() => import('../../views/member/account-settings'))
  // },
  // {
  //   path: '/member/contactus',
  //   component: lazy(() => import('../../views/member/contactus'))
  // },
  // {
  //   path: '/member/events',
  //   component: lazy(() => import('../../views/member/events'))
  // },
  {
    path: '/admin/basic',
    component: lazy(() => import('../../views/admin/basic'))
  }
 
]

export default AdminRoutes
