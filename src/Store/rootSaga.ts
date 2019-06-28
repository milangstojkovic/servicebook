import { all, fork, ForkEffect, CallEffectFn } from 'redux-saga/effects';
import watchData from '../Containers/DataProvider/DataProvider.saga';


type SagaWatcher = () => IterableIterator<ForkEffect>;
const sagas: Array<CallEffectFn<SagaWatcher>> = [watchData];

function* globalSagas() {
    const globalSagasForks = sagas.map(saga => fork(saga));

    yield all([...globalSagasForks]);
}

export default globalSagas;