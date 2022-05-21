import { lazy } from 'react'


const AdminRoutes = [
  
  {
    path: '/admin/course',
    component: lazy(() => import('../../views/admin/course'))
  },
  {
    path: '/admin/announcement',
    component: lazy(() => import('../../views/admin/announcement'))
  },
  // {
  //   path: '/member/account-settings',
  //   component: lazy(() => import('../../views/member/account-settings'))
  // },
  // {
  //   path: '/member/contactus',
  //   component: lazy(() => import('../../views/member/contactus'))
  // },
  {
    path: '/admin/events',
    component: lazy(() => import('../../views/admin/events'))
  },
  {
    path: '/admin/basic',
    component: lazy(() => import('../../views/admin/basic'))
  }
 
]

export default AdminRoutes
