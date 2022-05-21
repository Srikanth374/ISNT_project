import { Info, User, Users, Copy, ExternalLink, Book, FileText, CreditCard, Settings } from 'react-feather'

export default [

    {
        header: 'Admin'
      },
      
      {
        id: 'add-announcement',
        title: 'Announcements',
        icon: <Users size={20} />,
        navLink: '/admin/announcement'
      },
      {
        id: 'add-course',
        title: 'courses',
        icon: <Users size={20} />,
        navLink: '/admin/course'
      },
      
      {
        id: 'add-events',
        title: 'Events',
        icon: <Users size={20} />,
        navLink: '/admin/events'
      },
      // {
      //   id: 'accountsettings',
      //   title: 'Account Settings',
      //   icon: <Settings size={20} />,
      //   navLink: '/member/account-settings'
      // },
    
      // {
      //   id: 'contact',
      //   title: 'Contact us',
      //   icon: <Users size={20} />,
      //   navLink: '/member/contactus'
      // },

      {
        id: 'admin',
        title: 'Member List',
        icon: <Users size={20} />,
        navLink: '/admin/basic'
      }
     
      
]
