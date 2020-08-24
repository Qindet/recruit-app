import React, {useEffect} from "react";
import classes from './form-styles.module.css'
import {connect} from 'react-redux'
import {addStuffLoaded, closeStuffModal, fetchPositions, updateStuffItemLoaded} from "../../actions";
import {useFormik} from 'formik'
import {getPositions} from "../../selectors/positions";


const validate = values => {
    const errors = {};
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

function updateHelper(values,update,close) {
    update({...values,date:new Date().toDateString()})
    close()
}

function submitHelper(loaded,values,reset) {
    loaded({...values,date:new Date().toDateString()})
    reset()
}

const NewStuffForm = (props) => {
    const {fetchPositions}= props
    useEffect(() => {
        fetchPositions()
    },[fetchPositions])
    const formik = useFormik({
        initialValues: {...props.initialValues},
        validate,
        onSubmit: values => {
           props.flag==='update'?
               updateHelper(values,props.updateStuffItem,props.closeModal)
               : submitHelper(props.addStuffLoaded,{...values,date:new Date().toDateString()},formik.resetForm)
        },
    });
    return (
           <form onSubmit={formik.handleSubmit}>
               <div className='form-group'>
                   <label htmlFor="firstName">First name</label>
                   <input onChange={formik.handleChange} type="text" className="form-control" id="FirstName"
                          value={formik.values.firstName}
                          name="firstName"
                          placeholder="FirstName"/>
                   {formik.errors.firstName ? <div className={classes.formMessageError}>{formik.errors.firstName}</div> : null}
               </div>
               <div className="form-group">
                   <label htmlFor="lastName">Last Name</label>
                   <input onChange={formik.handleChange} type="text" className="form-control" id="lastName"
                          value={formik.values.lastName}
                          name="lastName"
                          placeholder="Last Name"/>
                   {formik.errors.lastName ? <div className={classes.formMessageError}>{formik.errors.lastName}</div> : null}
               </div>
               <div className="form-group">
                   <label htmlFor="address">Address</label>
                   <input onChange={formik.handleChange} type="text" className="form-control" id="address"
                          value={formik.values.address}
                          name="address"
                          placeholder="Address"/>
                   {formik.errors.address ? <div className={classes.formMessageError}>{formik.errors.address}</div> : null}
               </div>
               <div className="form-group">
                   <label htmlFor="emailControl">Email address</label>
                   <input onChange={formik.handleChange}
                          value={formik.values.email}
                          type="email" className="form-control" id="email"
                          name="email"
                          placeholder="name@example.com"/>
                   {formik.errors.email ? <div className={classes.formMessageError}>{formik.errors.email}</div> : null}
               </div>
               <div className="form-group">
                   <label htmlFor="jobControl">Choose job position</label>
                   <select
                       onChange={formik.handleChange}
                       value={formik.values.position}
                           className="form-control" id="position">
                       {props.positions?
                           props.positions.map((item)=> <option
                               key={item.id}
                           >{item.positionName}</option>)
                       :<option>empty</option>}
                   </select>

               </div>
               <button type="submit" className="btn btn-primary">Submit</button>
           </form>
    )
}

const mapStateToProps = (state) => {
    return {
        positions: getPositions(state)
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addStuffLoaded: (data) => dispatch(addStuffLoaded(data)),
        updateStuffItem: (item) => dispatch(updateStuffItemLoaded(item)),
        closeModal: () => dispatch(closeStuffModal()),
        fetchPositions: () => dispatch(fetchPositions())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewStuffForm)