import { Info, User, Users, Copy, ExternalLink, Book, FileText, CreditCard, Settings } from 'react-feather'

export default [

    {
        header: 'Member'
      },
      
      {
        id: 'announcement',
        title: 'Announcements',
        icon: <Users size={20} />,
        navLink: '/member/announcement'
      },
      {
        id: 'course',
        title: 'courses',
        icon: <Users size={20} />,
        navLink: '/member/course'
      },
      
      {
        id: 'events',
        title: 'Events',
        icon: <Users size={20} />,
        navLink: '/member/events'
      },
      {
        id: 'accountsettings',
        title: 'Account Settings',
        icon: <Settings size={20} />,
        navLink: '/member/account-settings'
      },
      // {
      //   id: 'change',
      //   title: 'Change Password',
      //   icon: <Users size={20} />,
      //   navLink: '/apps/changepassword'
      // },
      {
        id: 'contact',
        title: 'Contact us',
        icon: <Users size={20} />,
        navLink: '/member/contactus'
      }
     
      
]
