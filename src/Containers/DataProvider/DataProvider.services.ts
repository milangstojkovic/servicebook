import axios from 'axios';
import { User, Vehicle, Record } from '../../Models/Model';

const baseUrl = 'http://localhost:3000';

export const getUsersService = (): Promise<User[]> => 
    axios.get<User[]>(
        `${baseUrl}/users`
    )
    .then(response => response.data)
    .catch(err => {
        throw err
    })

export const getUserVehiclesService = (id:Number): Promise<Vehicle[]> => 
    axios.get<Vehicle[]>(
        `${baseUrl}/users/${id}/vehicles`
    )
    .then(response => response.data)
    .catch(err => {
        throw err
    })

export const getVehicleRecordsService = (id:Number): Promise<Record[]> => 
    axios.get<Record[]>(
        `${baseUrl}/vehicles/${id}/records`
    )
    .then(response => response.data)
    .catch(err => {
        throw err
    })

export const createUserService = (user: User): any => 
    axios.post<any>(
        `${baseUrl}/users`, user
    )
    .catch (err=>{
        throw err
    })

export const addVehicleService = (vehicle: Vehicle): any => 
    axios.post<any>(
        `${baseUrl}/vehicles`, vehicle
    )
    .catch (err=>{
        throw err
    })

export const addRecordService = (record: Record): any => 
    axios.post<any>(
        `${baseUrl}/records`, record
    )
    .catch (err=>{
        throw err
    })

export const deleteUserService = (id: Number): any =>
    axios.delete<any>(
        `${baseUrl}/users/${id}`
    )
    
export const deleteVehicleService = (id: Number): any =>
    axios.delete<any>(
        `${baseUrl}/vehicles/${id}`
    )

export const deleteRecordService = (id: Number): any =>
    axios.delete<any>(
        `${baseUrl}/records/${id}`
    )

export const updateRecordService = (record: Record): any =>
    axios.put<any>(
        `${baseUrl}/records/${record.id}`,record
    )