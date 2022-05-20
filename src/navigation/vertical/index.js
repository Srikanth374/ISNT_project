// ** Navigation sections imports
import apps from './apps'
import member from './member'
import admin from './admin'
// import pages from './pages'
import forms from './forms'
import tables from './tables'
import others from './others'
import dashboards from './dashboards'
import uiElements from './ui-elements'
import chartsAndMaps from './charts-maps'

// ** Merge & Export
export default [...dashboards, ...apps, ...member, ...admin, ...uiElements, ...forms, ...tables, ...chartsAndMaps,  ...others]
