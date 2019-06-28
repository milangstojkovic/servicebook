import React from 'react';
import { fetchUserDataInit, IDataProviderActions } from '../DataProvider/DataProvider.actions';
import { Dispatch, bindActionCreators } from 'redux'; 
import { connect } from 'react-redux'

export interface IDataProviderDispatch {
    fetchUserDataInit: fetchUserDataInit
}

const mapDispatchToProps = (dispatch: Dispatch<IDataProviderActions>) => {
    return bindActionCreators (
        {
            fetchUserDataInit
        },
        dispatch
    );
};

export class DataProvider extends React.Component <IDataProviderDispatch> {
    constructor(props: Readonly<IDataProviderDispatch>){
        super(props);
    }

    componentDidMount() {
        this.props.fetchUserDataInit();
    }
    render() {
        return this.props.children;
    }
}

export default connect<IDataProviderDispatch>(null,mapDispatchToProps)(DataProvider)