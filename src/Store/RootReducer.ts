import { combineReducers } from 'redux';
import { IStoreState } from './IStoreState';
import dataProviderReducer from '../Containers/DataProvider/DataProvider.reducer';
import PresentationProviderReducer from '../Containers/PresentationProvider/PresentationProvider.reducer';

const rootReducer = combineReducers<IStoreState>({
    data: dataProviderReducer,
    presentationProvider: PresentationProviderReducer
});

export default rootReducer;