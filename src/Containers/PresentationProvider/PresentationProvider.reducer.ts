import ACTION_TYPE from '../../Store/actionTypes'
import {IPresentationProviderActions} from './PresentationProvider.actions'
import {IPresentationProviderState} from './PresentationProvider.state'
import {PageStatus} from '../../Models/Model'

const initState: IPresentationProviderState = {
    pageStatus: PageStatus.Home
};

export default (state = initState, action: IPresentationProviderActions) => {
    switch(action.type) {
        case ACTION_TYPE.SET_PAGE_STATUS:
            return {
                ...state,
                pageStatus:action.payload
            }
            default: return state;
    }
}