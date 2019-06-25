import ACTION_TYPE from '../../Store/actionTypes'
import {PageStatus} from '../../Models/Model'

export interface ISetPageStatus {
    payload: PageStatus,
    type: ACTION_TYPE.SET_PAGE_STATUS;
}
export type setPageStatus = (pageStatus:PageStatus) => ISetPageStatus;
export const setPageStatus: setPageStatus = (pageStatus:PageStatus) => {
    return {
        payload: pageStatus,
        type: ACTION_TYPE.SET_PAGE_STATUS
    };
};

export type IPresentationProviderActions =
    | ISetPageStatus;