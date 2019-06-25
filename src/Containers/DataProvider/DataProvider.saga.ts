import { User, Vehicle, Record } from '../../Models/Model';
import ACTION_TYPES from '../../Store/actionTypes';
import {
    IFetchUserDataInit, fetchUserDataSucces, fetchUserDataError,
    IFetchUserVehiclesInit, fetchUserVehiclesSuccess, fetchUserVehiclesError,
    IFetchVehicleRecordsInit, fetchVehicleRecordsSuccess, fetchVehicleRecordsError,
    IUpdateVehicleRecordInit, updateVehicleRecordSuccess, updateVehicleRecordError,
    IDeleteUserInit, deleteUserSuccess, deleteUserError,
    IDeleteUserVehicleInit, deleteUserVehicleSuccess, deleteUserVehicleError,
    IDeleteVehicleRecordInit, deleteVehicleRecordSuccess, deleteVehicleRecordError,
    ICreateUserInit, createUserSuccess, createUserError,
    IAddUserVehicleInit, addUserVehicleSuccess, addUserVehicleError,
    IAddVehicleRecordInit, addVehicleRecordSuccess, addVehicleRecordError
} from './DataProvider.actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
    getUsersService, getUserVehiclesService, getVehicleRecordsService,
    updateRecordService, 
    deleteUserService, deleteVehicleService, deleteRecordService,
    createUserService, addVehicleService, addRecordService } from './DataProvider.services';

export function* fetchAllUsers(action: IFetchUserDataInit) {
    let data: User[];
    try {
        data = yield call(getUsersService);
        yield put(fetchUserDataSucces(data));
    } catch(error) {
        yield put(fetchUserDataError(error.message));
    }
}

export function* fetchVehiclesByUser(action: IFetchUserVehiclesInit) {
    let data: Vehicle[];
    try {
        data = yield call(getUserVehiclesService, action.payload);
        yield put(fetchUserVehiclesSuccess(data));
    } catch(error) {
        yield put(fetchUserVehiclesError(error.message));
    }
}

export function* fetchRecordsByVehicle(action: IFetchVehicleRecordsInit) {
    let data: Record[];
    try {
        data = yield call(getVehicleRecordsService, action.payload);
        yield put(fetchVehicleRecordsSuccess(data));
    } catch(error) {
        yield put(fetchVehicleRecordsError(error.message));
    }
}

export function* updateVehicleRecord(action: IUpdateVehicleRecordInit) {
    try {
        const code = yield call(updateRecordService, action.payload);
        yield put(updateVehicleRecordSuccess(code))
    } catch(error) {
        yield put(updateVehicleRecordError(error.message))
    }
}

export function* deleteUser(action: IDeleteUserInit) {
    try {
        const response = yield call(deleteUserService,action.payload);
        yield put(deleteUserSuccess(response))
    } catch(error) {
        yield put(deleteUserError(error.message))
    }
}

export function* deleteVehicle(action: IDeleteUserVehicleInit) {
    try {
        const response = yield call(deleteVehicleService,action.payload);
        yield put(deleteUserVehicleSuccess(response))
    } catch(error) {
        yield put(deleteUserVehicleError(error.message))
    }
}

export function* deleteRecord(action: IDeleteVehicleRecordInit) {
    try {
        const response = yield call(deleteRecordService,action.payload);
        yield put(deleteVehicleRecordSuccess(response))
    } catch(error) {
        yield put(deleteVehicleRecordError(error.message))
    }
}

export function* createUser(action: ICreateUserInit) {
    try {
        const response = yield call(createUserService, action.payload);
        yield put(createUserSuccess(response))
    } catch(error) {
        yield put(createUserError(error.message))
    }
}

export function* addVehicle(action: IAddUserVehicleInit) {
    try {
        const response = yield call(addVehicleService, action.payload);
        yield put(addUserVehicleSuccess(response))
    } catch(error) {
        yield put(addUserVehicleError(error.message))
    }
}

export function* addRecord(action: IAddVehicleRecordInit) {
    try {
        const response = yield call(addRecordService, action.payload);
        yield put(addVehicleRecordSuccess(response))
    } catch(error) {
        yield put(addVehicleRecordError(error.message))
    }
}

export default function* watchData() {
    yield takeLatest(ACTION_TYPES.FETCH_USER_DATA_INIT, fetchAllUsers);
}