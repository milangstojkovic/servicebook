import ACTION_TYPES from '../../Store/actionTypes';
import { User, Vehicle, Record }from '../../Models/Model';


export interface IFetchUserDataInit {
    type: ACTION_TYPES.FETCH_USER_DATA_INIT
}
export type fetchUserDataInit = () => IFetchUserDataInit;
export const fetchUserDataInit: fetchUserDataInit = () => {
    return {
        type: ACTION_TYPES.FETCH_USER_DATA_INIT
    };
};
export interface IFetchUserDataSuccess {
    payload: User[],
    type: ACTION_TYPES.FETCH_USER_DATA_SUCCESS
}
export type fetchUserDataSucces = (users: User[]) => IFetchUserDataSuccess;
export const fetchUserDataSucces: fetchUserDataSucces = (users: User[]) => {
    return {
        payload: users,
        type: ACTION_TYPES.FETCH_USER_DATA_SUCCESS
    };
};
export interface IFetchUserDataError {
    payload: string,
    type: ACTION_TYPES.FETCH_USER_DATA_ERROR
}
export type fetchUserDataError = (message: string) => IFetchUserDataError;
export const fetchUserDataError: fetchUserDataError = (message: string) => {
    return {
        payload: message,
        type: ACTION_TYPES.FETCH_USER_DATA_ERROR
    };
};

export interface IFetchUserVehiclesInit {
    payload: number,
    type: ACTION_TYPES.FETCH_USER_VEHICLES_INIT
}
export type fetchUserVehiclesInit = (userId: number) => IFetchUserVehiclesInit;
export const fetchUserVehiclesInit: fetchUserVehiclesInit = (userId: number) => {
    return {
        payload: userId,
        type: ACTION_TYPES.FETCH_USER_VEHICLES_INIT
    }
}
export interface IFetchUserVehiclesSuccess {
    payload: Vehicle[],
    type: ACTION_TYPES.FETCH_USER_VEHICLES_SUCCESS
}
export type fetchUserVehiclesSuccess = (vehicles: Vehicle[]) => IFetchUserVehiclesSuccess;
export const fetchUserVehiclesSuccess: fetchUserVehiclesSuccess = (vehicles: Vehicle[]) => {
    return {
        payload: vehicles,
        type: ACTION_TYPES.FETCH_USER_VEHICLES_SUCCESS
    }
}
export interface IFetchUserVehiclesError {
    payload: string,
    type: ACTION_TYPES.FETCH_USER_VEHICLES_ERROR
}
export type fetchUserVehiclesError = (message: string) => IFetchUserVehiclesError;
export const fetchUserVehiclesError: fetchUserVehiclesError = (message: string) => {
    return {
        payload: message,
        type: ACTION_TYPES.FETCH_USER_VEHICLES_ERROR
    }
}

export interface IFetchVehicleRecordsInit {
    payload: number,
    type: ACTION_TYPES.FETCH_VEHICLE_RECORDS_INIT
}
export type fetchVehicleRecordsInit = (vehicleId: number) => IFetchVehicleRecordsInit;
export const fetchVehicleRecordsInit: fetchVehicleRecordsInit = (vehicleId: number) => {
    return {
        payload: vehicleId,
        type: ACTION_TYPES.FETCH_VEHICLE_RECORDS_INIT
    }
}
export interface IFetchVehicleRecordsSuccess {
    payload: Record[],
    type: ACTION_TYPES.FETCH_VEHICLE_RECORDS_SUCCESS
}
export type fetchVehicleRecordsSuccess = (records: Record[]) => IFetchVehicleRecordsSuccess;
export const fetchVehicleRecordsSuccess: fetchVehicleRecordsSuccess = (records: Record[]) => {
    return {
        payload: records,
        type: ACTION_TYPES.FETCH_VEHICLE_RECORDS_SUCCESS
    }
}
export interface IFetchVehicleRecordsError {
    payload: string,
    type: ACTION_TYPES.FETCH_VEHICLE_RECORDS_ERROR
}
export type fetchVehicleRecordsError = (message: string) => IFetchVehicleRecordsError;
export const fetchVehicleRecordsError: fetchVehicleRecordsError = (message: string) => {
    return {
        payload: message,
        type: ACTION_TYPES.FETCH_VEHICLE_RECORDS_ERROR
    }   
}

export interface ISelectUser {
    payload: User,
    type: ACTION_TYPES.SELECT_USER
}
export type selectUser = (user: User) => ISelectUser;
export const selectUser: selectUser = (user: User) => {
    return {
        payload: user,
        type: ACTION_TYPES.SELECT_USER
    }
}

export interface ISelectVehicle {
    payload: Vehicle,
    type: ACTION_TYPES.SELECT_VEHICLE
}
export type selectVehicle = (vehicle: Vehicle) => ISelectVehicle;
export const selectVehicle: selectVehicle = (vehicle: Vehicle) => {
    return {
        payload: vehicle,
        type: ACTION_TYPES.SELECT_VEHICLE
    }
}

export interface ICreateUserInit {
    payload: User,
    type: ACTION_TYPES.CREATE_USER_INIT
}
export type createUserInit = (user: User) => ICreateUserInit;
export const createUserInit: createUserInit = (user: User) => {
    return {
        payload:user,
        type: ACTION_TYPES.CREATE_USER_INIT
    };
};
export interface ICreateUserSuccess {
    payload: Number,
    type: ACTION_TYPES.CREATE_USER_SUCCESS
}
export type createUserSuccess = (res: Number) => ICreateUserSuccess;
export const createUserSuccess: createUserSuccess = (res: Number) => {
    return {
        payload: res,
        type: ACTION_TYPES.CREATE_USER_SUCCESS
    };
};
export interface ICreateUserError {
    payload: string,
    type: ACTION_TYPES.CREATE_USER_ERROR
}
export type createUserError = (message: string) => ICreateUserError;
export const createUserError: createUserError = (message: string) => {
    return {
        payload: message,
        type: ACTION_TYPES.CREATE_USER_ERROR
    };
};

export interface IDeleteUserInit {
    payload: Number,
    type: ACTION_TYPES.DELETE_USER_INIT
}
export type deleteUserInit = (userId: Number) => IDeleteUserInit;
export const deleteUserInit: deleteUserInit = (userId: Number) => {
    return {
        payload: userId,
        type: ACTION_TYPES.DELETE_USER_INIT
    };
};
export interface IDeleteUserSuccess {
    payload: Number,
    type: ACTION_TYPES.DELETE_USER_SUCCESS
}
export type deleteUserSuccess = (res: Number) => IDeleteUserSuccess;
export const deleteUserSuccess: deleteUserSuccess = (res: Number) => {
    return {
        payload: res,
        type: ACTION_TYPES.DELETE_USER_SUCCESS
    };
};
export interface IDeleteUserError {
    payload: string,
    type: ACTION_TYPES.DELETE_USER_ERROR
}
export type deleteUserError = (message: string) => IDeleteUserError;
export const deleteUserError: deleteUserError = (message: string) => {
    return {
        payload: message,
        type: ACTION_TYPES.DELETE_USER_ERROR
    };
};

export interface IAddUserVehicleInit {
    payload: Vehicle,
    type: ACTION_TYPES.ADD_USER_VEHICLE_INIT
}
export type addUserVehicleInit = (vehicle: Vehicle) => IAddUserVehicleInit;
export const addUserVehicleInit: addUserVehicleInit = (vehicle: Vehicle) => {
    return {
        payload: vehicle,
        type: ACTION_TYPES.ADD_USER_VEHICLE_INIT
    };
};
export interface IAddUserVehicleSuccess {
    payload: Number,
    type: ACTION_TYPES.ADD_USER_VEHICLE_SUCCESS
}
export type addUserVehicleSuccess = (res: Number) => IAddUserVehicleSuccess;
export const addUserVehicleSuccess: addUserVehicleSuccess = (res: Number) => {
    return {
        payload: res,
        type: ACTION_TYPES.ADD_USER_VEHICLE_SUCCESS
    };
};
export interface IAddUserVehicleError {
    payload: string,
    type: ACTION_TYPES.ADD_USER_VEHICLE_ERROR
}
export type addUserVehicleError = (message: string) => IAddUserVehicleError;
export const addUserVehicleError: addUserVehicleError = (message: string) => {
    return {
        payload: message,
        type: ACTION_TYPES.ADD_USER_VEHICLE_ERROR
    };
};

export interface IDeleteUserVehicleInit {
    payload: Number,
    type: ACTION_TYPES.DELETE_USER_VEHICLE_INIT
}
export type deleteUserVehicleInit = (vehicleId: Number) => IDeleteUserVehicleInit;
export const deleteUserVehicleInit: deleteUserVehicleInit = (vehicleId: Number) => {
    return {
        payload: vehicleId,
        type: ACTION_TYPES.DELETE_USER_VEHICLE_INIT
    };
};
export interface IDeleteUserVehicleSuccess {
    payload: Number,
    type: ACTION_TYPES.DELETE_USER_VEHICLE_SUCCESS
}
export type deleteUserVehicleSuccess = (res: Number) => IDeleteUserVehicleSuccess;
export const deleteUserVehicleSuccess: deleteUserVehicleSuccess = (res: Number) => {
    return {
        payload: res,
        type: ACTION_TYPES.DELETE_USER_VEHICLE_SUCCESS
    };
};
export interface IDeleteUserVehicleError {
    payload: string,
    type: ACTION_TYPES.DELETE_USER_VEHICLE_ERROR
}
export type deleteUserVehicleError = (message: string) => IDeleteUserVehicleError;
export const deleteUserVehicleError: deleteUserVehicleError = (message: string) => {
    return {
        payload: message,
        type: ACTION_TYPES.DELETE_USER_VEHICLE_ERROR
    };
};

export interface IAddVehicleRecordInit {
    payload: Record,
    type: ACTION_TYPES.ADD_VEHICLE_RECORD_INIT
}
export type addVehicleRecordInit = (record: Record) => IAddVehicleRecordInit;
export const addVehicleRecordInit: addVehicleRecordInit = (record: Record) => {
    return {
        payload: record,
        type: ACTION_TYPES.ADD_VEHICLE_RECORD_INIT
    };
};
export interface IAddVehicleRecordSuccess {
    payload: Number,
    type: ACTION_TYPES.ADD_VEHICLE_RECORD_SUCCESS
}
export type addVehicleRecordSuccess = (res: Number) => IAddVehicleRecordSuccess;
export const addVehicleRecordSuccess: addVehicleRecordSuccess = (res: Number) => {
    return {
        payload: res,
        type: ACTION_TYPES.ADD_VEHICLE_RECORD_SUCCESS
    };
};
export interface IAddVehicleRecordError {
    payload: string,
    type: ACTION_TYPES.ADD_VEHICLE_RECORD_ERROR
}
export type addVehicleRecordError = (message: string) => IAddVehicleRecordError;
export const addVehicleRecordError: addVehicleRecordError = (message: string) => {
    return {
        payload: message,
        type: ACTION_TYPES.ADD_VEHICLE_RECORD_ERROR
    };
};

export interface IUpdateVehicleRecordInit {
    payload: Record,
    type: ACTION_TYPES.UPDATE_VEHICLE_RECORD_INIT
}
export type updateVehicleRecordInit = (record: Record) => IUpdateVehicleRecordInit;
export const updateVehicleRecordInit: updateVehicleRecordInit = (record: Record) => {
    return {
        payload: record,
        type: ACTION_TYPES.UPDATE_VEHICLE_RECORD_INIT
    };
};
export interface IUpdateVehicleRecordSuccess {
    payload: Number,
    type: ACTION_TYPES.UPDATE_VEHICLE_RECORD_SUCCESS
}
export type updateVehicleRecordSuccess = (res: Number) => IUpdateVehicleRecordSuccess;
export const updateVehicleRecordSuccess: updateVehicleRecordSuccess = (res: Number) => {
    return {
        payload: res,
        type: ACTION_TYPES.UPDATE_VEHICLE_RECORD_SUCCESS
    };
};
export interface IUpdateVehicleRecordError {
    payload: string,
    type: ACTION_TYPES.UPDATE_VEHICLE_RECORD_ERROR
}
export type updateVehicleRecordError = (message: string) => IUpdateVehicleRecordError;
export const updateVehicleRecordError: updateVehicleRecordError = (message: string) => {
    return {
        payload: message,
        type: ACTION_TYPES.UPDATE_VEHICLE_RECORD_ERROR
    };
};

export interface IDeleteVehicleRecordInit {
    payload: Number,
    type: ACTION_TYPES.DELETE_VEHICLE_RECORD_INIT
}
export type deleteVehicleRecordInit = (recordId: Number) => IDeleteVehicleRecordInit;
export const deleteVehicleRecordInit: deleteVehicleRecordInit = (recordId: Number) => {
    return {
        payload: recordId,
        type: ACTION_TYPES.DELETE_VEHICLE_RECORD_INIT
    };
};
export interface IDeleteVehicleRecordSuccess {
    payload: Number,
    type: ACTION_TYPES.DELETE_VEHICLE_RECORD_SUCCESS
}
export type deleteVehicleRecordSuccess = (res: Number) => IDeleteVehicleRecordSuccess;
export const deleteVehicleRecordSuccess: deleteVehicleRecordSuccess = (res: Number) => {
    return {
        payload: res,
        type: ACTION_TYPES.DELETE_VEHICLE_RECORD_SUCCESS
    };
};
export interface IDeleteVehicleRecordError {
    payload: string,
    type: ACTION_TYPES.DELETE_VEHICLE_RECORD_ERROR
}
export type deleteVehicleRecordError = (message: string) => IDeleteVehicleRecordError;
export const deleteVehicleRecordError: deleteVehicleRecordError = (message: string) => {
    return {
        payload: message,
        type: ACTION_TYPES.DELETE_VEHICLE_RECORD_ERROR
    };
};

export type IDataProviderActions = 
    | IFetchUserDataInit
    | IFetchUserDataSuccess
    | IFetchUserDataError
    | IFetchUserVehiclesInit
    | IFetchUserVehiclesSuccess
    | IFetchUserVehiclesError
    | IFetchVehicleRecordsInit
    | IFetchVehicleRecordsSuccess
    | IFetchVehicleRecordsError
    | ICreateUserInit
    | ICreateUserSuccess
    | ICreateUserError
    | IAddUserVehicleInit
    | IAddUserVehicleSuccess
    | IAddUserVehicleError
    | IAddVehicleRecordInit
    | IAddVehicleRecordSuccess
    | IAddVehicleRecordError
    | IDeleteUserInit
    | IDeleteUserSuccess
    | IDeleteUserError
    | IDeleteUserVehicleInit
    | IDeleteUserVehicleSuccess
    | IDeleteUserVehicleError
    | IDeleteVehicleRecordInit
    | IDeleteVehicleRecordSuccess
    | IDeleteVehicleRecordError
    | IUpdateVehicleRecordInit
    | IUpdateVehicleRecordSuccess
    | IUpdateVehicleRecordError
    | ISelectUser
    | ISelectVehicle;