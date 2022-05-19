import { Info, User, Users, Copy, ExternalLink, Book, FileText, CreditCard, Settings } from 'react-feather'

export default [

    {
        header: 'Membership'
      },
      {
        id: 'instructions',
        title: 'Instructions',
        icon: <Info size={20} />,
        navLink: '/apps/instructions'
      },
      {
        id: 'associatemember',
        title: 'Associate Member',
        icon: <User size={20} />,
        navLink: '/apps/associatemember'
      },
      {
        id: 'addstudent',
        title: 'Student Member',
        icon: <Users size={20} />,
        navLink: '/apps/addstudent'
      },
   
     
      {
        id: 'corporatemember',
        title: 'Corporate Member',
        icon: <Copy size={20} />,
        navLink: '/apps/corporatemember'
      },
    
      {
        id: 'lifecorporate',
        title: 'Life Corporate Member',
        icon: <ExternalLink size={20} />,
        navLink: '/apps/lifecorporate'
      },
    
      {
        id: 'addmember',
        title: 'Member',
        icon: <Book size={20} />,
        navLink: '/apps/addmember'
      },
     
      {
        id: 'lifemember',
        title: 'Life Member',
        icon: <FileText size={20} />,
        navLink: '/apps/lifemember'
      },
       
      {
        id: 'fellowmember',
        title: 'Fellow Member',
        icon: <CreditCard size={20} />,
        navLink: '/apps/fellowmember'
      }
]
