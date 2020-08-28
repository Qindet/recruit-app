import React, {useEffect} from "react";
import {connect} from 'react-redux'
import {addStuffLoaded, closeStuffModal, fetchPositions, updateStuffItemLoaded} from "../actions";
import {getPositions} from "../selectors/positions"
import {NewStuffFormValidFieldsType, PositionItemType, StuffItemType} from "../ts-types/main-types";
import {AppStateType} from "../reducers";
import NewStuffForm from "../components/forms/new-stuff-form";




const validate = (values:NewStuffFormValidFieldsType ) => {
    const errors:NewStuffFormValidFieldsType={
        firstName: '',
        lastName: '',
        address: '',
        email:  ''
    }
    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 20 characters or less';
    }
    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
    }
    if (!values.address) {
        errors.address = 'Required';
    } else if (values.address.length > 35) {
        errors.address = 'Must be 35 characters or less';
    }
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    return errors;
};

function updateHelper(values:StuffItemType,update:(item:StuffItemType)=>void,close:()=>void) {
    update({...values,date:new Date().toDateString()})
    close()
}

function submitHelper(loaded:(item:StuffItemType)=>void,values:StuffItemType,reset:()=>void) {
    loaded({...values,date:new Date().toDateString()})
    reset()
}

//также можно создать 3-й type для ownProps
type NewStuffFormContainerPropsType = MapStatePropsType & MapDispatchPropsType & OwnProps
type MapStatePropsType = {
    positions: Array<PositionItemType>
}
type MapDispatchPropsType = {
    addStuffLoaded: (item: StuffItemType) => void,
    updateStuffItem: (item: StuffItemType) => void,
    closeModal: () => void,
    fetchPositions: () => void
}
type OwnProps = {
    initialValues: StuffItemType,
    flag: string
}

//
const NewStuffFormContainer: React.FC<NewStuffFormContainerPropsType> = ({fetchPositions,positions,closeModal,updateStuffItem,
                                                                            addStuffLoaded,initialValues,flag}) => {
    useEffect(() => {
        fetchPositions()
    },[fetchPositions])
    return  <NewStuffForm  initialValues={initialValues} flag={flag} validate={validate} updateHelper={updateHelper}
                          submitHelper={submitHelper} updateStuffItem={updateStuffItem} closeModal={closeModal}
                          addStuffLoaded={addStuffLoaded} positions={positions}/>
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        positions: getPositions(state)
    }
}


const mapDispatchToProps = (dispatch: any): MapDispatchPropsType => {
    return {
        addStuffLoaded: (data) => dispatch(addStuffLoaded(data)),
        updateStuffItem: (item) => dispatch(updateStuffItemLoaded(item)),
        closeModal: () => dispatch(closeStuffModal()),
        fetchPositions: () => dispatch(fetchPositions())
    }
}
export default connect<MapStatePropsType,MapDispatchPropsType,OwnProps,AppStateType>(mapStateToProps,mapDispatchToProps)(NewStuffFormContainer)