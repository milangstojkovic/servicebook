import ACTION_TYPE from '../../Store/actionTypes';
import { IDataProviderActions } from './DataProvider.actions';
import { IDataProviderState } from './DataProvider.state';

const initState: IDataProviderState = {
    users: { data: null, error: false, loading: false },
    vehicles: { data: null, error: false, loading: false },
    records: { data: null, error: false, loading: false },
    selectedUser: null,
    selectedVehicle: null
}

export default (state = initState, action: IDataProviderActions): IDataProviderState => {
    switch (action.type) {
        case ACTION_TYPE.FETCH_USER_DATA_INIT: {
            return {
                ...state,
                users: {
                    ...initState.users,
                    loading: true
                }
            }
        }
        case ACTION_TYPE.FETCH_USER_DATA_SUCCESS: {
            return {
                ...state,
                users: {
                    ...initState.users,
                    data: action.payload
                }
            }
        }
        case ACTION_TYPE.FETCH_USER_DATA_ERROR: {
            return {
                ...state,
                users: {
                    ...initState.users,
                    error: true,
                    errorMessage: action.payload
                }
            }
        }
        case ACTION_TYPE.FETCH_USER_VEHICLES_INIT: {
            return {
                ...state,
                vehicles: {
                    ...initState.vehicles,
                    loading: true
                }
            }
        }
        case ACTION_TYPE.FETCH_USER_VEHICLES_SUCCESS: {
            return {
                ...state,
                vehicles: {
                    ...initState.vehicles,
                    data: action.payload
                }
            }
        }
        case ACTION_TYPE.FETCH_USER_VEHICLES_ERROR: {
            return {
                ...state,
                vehicles: {
                    ...initState.vehicles,
                    error: true,
                    errorMessage: action.payload
                }
            }
        }
        case ACTION_TYPE.FETCH_VEHICLE_RECORDS_INIT: {
            return {
                ...state,
                records: {
                    ...initState.records,
                    loading: true
                }
            }
        }
        case ACTION_TYPE.FETCH_VEHICLE_RECORDS_SUCCESS: {
            return {
                ...state,
                records: {
                    ...initState.records,
                    data: action.payload
                }
            }
        }
        case ACTION_TYPE.FETCH_VEHICLE_RECORDS_ERROR: {
            return {
                ...state,
                records: {
                    ...initState.records,
                    error: true,
                    errorMessage: action.payload
                }
            }
        }
        case ACTION_TYPE.SELECT_USER: {
            return {
                ...state,
                selectedUser: action.payload
            }
        }
        case ACTION_TYPE.SELECT_VEHICLE: {
            return {
                ...state,
                selectedVehicle:action.payload
            }
        }
        default: return state;
    }
}