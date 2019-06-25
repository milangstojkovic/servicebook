import { IDataProviderState } from "../Containers/DataProvider/DataProvider.state";
import { IPresentationProviderState } from "../Containers/PresentationProvider/PresentationProvider.state";


export interface IStoreState {
    data: IDataProviderState,
    presentationProvider: IPresentationProviderState;
}