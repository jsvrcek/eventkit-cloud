import {combineReducers} from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import userReducer from './userReducer'
import { routerReducer } from 'react-router-redux'
import {exportJobsReducer, exportModeReducer, exportBboxReducer, exportAoiInfoReducer, drawerMenuReducer} from './exportsReducer';
import {invalidDrawWarningReducer} from './drawToolBarReducer';
import {zoomToSelectionReducer, resetMapReducer} from './AoiInfobarReducer.js';
import {getGeonamesReducer} from './searchToolbarReducer.js';
import {toolbarIconsReducer, showImportModalReducer, importGeomReducer} from './mapToolReducer';


const rootReducer = combineReducers({
    // short hand property names
    mode: exportModeReducer,
    jobs: exportJobsReducer,
    bbox: exportBboxReducer,
    aoiInfo: exportAoiInfoReducer,
    zoomToSelection: zoomToSelectionReducer,
    resetMap: resetMapReducer,
    geonames: getGeonamesReducer,
    showInvalidDrawWarning: invalidDrawWarningReducer,
    toolbarIcons: toolbarIconsReducer,
    showImportModal: showImportModalReducer,
    importGeom: importGeomReducer,
    form: reduxFormReducer,
    user: userReducer,
    routing: routerReducer,
    drawerOpen: drawerMenuReducer,
});

export default rootReducer;