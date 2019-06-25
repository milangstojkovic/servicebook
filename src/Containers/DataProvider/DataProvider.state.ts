import { User, RequestDataState, Record, Vehicle } from '../../Models/Model';

export interface IDataProviderState {
    users: RequestDataState<User[]>,
    vehicles: RequestDataState<Vehicle[]>,
    records: RequestDataState<Record[]>,
    selectedUser: User | null,
    selectedVehicle: Vehicle | null
}