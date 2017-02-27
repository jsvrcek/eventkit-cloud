import {Config} from '../config'
import actions from './actionTypes'
import ExportApi from '../api/exportsApi';

export function clickZoomToSelection() {
    return {
        type: actions.CLICK_ZOOM_TO_SELECTION,
        click: true
    }
}

export function clickResetMap() {
    return {
        type: actions.CLICK_RESET_MAP,
        click: true
    }
}
