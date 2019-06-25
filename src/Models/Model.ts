export interface RequestDataState<T> {
    loading: boolean;
    error: boolean;
    errorMessage?: string;
    data: T | null;
}

export interface User {
    id: number;
    name: string;
    surname: string;
}

export interface Vehicle {
    id: number;
    manufacturer: string;
    model: string;
    modelYear: number;
    ownerId: number;
}

export interface Record {
    id: number;
    startDate: Date;
    endDate: Date;
    note: string;
    vehicleKms: number;
    status: RecordStatus;
    vehicleId:number;
}

export enum RecordStatus {
    NotStarted = 0,
    Started = 1,
    Finished = 2
}

export enum PageStatus {
    Home = 0,
    UserModal = 1,
    VehicleModal = 2,
    RecordModal = 3
}