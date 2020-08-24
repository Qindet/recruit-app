import React from "react";
import {useFormik} from 'formik'


import {connect} from 'react-redux'
import {addPositionLoaded} from "../../actions/position-operations";
import classes from "./form-styles.module.css";

const validate = values => {
    const errors = {};
    if (!values.positionName) {
        errors.positionName = 'Required';
    } else if (values.positionName.length > 15) {
        errors.positionName = 'Must be 15 characters or less';
    }
    if (!values.salary) {
        errors.salary = 'Required';
    } else if (values.salary.length > 10) {
        errors.salary = 'Must be 10 characters or less';
    } else if (!Number.isInteger( +values.salary)) {
        errors.salary = 'Must be number';
    }
    return errors;
};




const NewPositionForm = (props) => {
    const formik = useFormik({
        initialValues: {positionName:'',salary:''},
        validate,
        onSubmit: values => {
            props.addPosition(values)
            formik.resetForm()
        },
    });

    return (
       <>
           <h1>Add new position</h1>
           <form
               onSubmit={formik.handleSubmit}
           >

                       <div className="form-group">
                           <label htmlFor="positionName">Position name</label>
                           <input  className="form-control"
                                   name="positionName" id="positionName"
                           value={formik.values.positionName}
                           onChange={formik.handleChange}/>
                           {formik.errors.positionName && formik.touched.positionName ? (
                               <div className={classes.formMessageError}>{formik.errors.positionName}</div>
                           ) : null}
                       </div>
                       <div className="form-group">
                           <label htmlFor="salary">Salary</label>
                           <input className="form-control"
                                  name="salary" id="salary"
                           value={formik.values.salary}
                                  onChange={formik.handleChange}/>
                           {formik.errors.salary && formik.touched.salary ? (
                               <div className={classes.formMessageError}>{formik.errors.salary}</div>
                           ) : null}
                       </div>
                       <button type="submit" className="btn btn-primary">Submit</button>
           </form>
       </>
    )
}



const mapDispatchToProps = (dispatch) => {
    return {
        addPosition: (item) => dispatch(addPositionLoaded(item))
    }
}

export default connect(null,mapDispatchToProps)(NewPositionForm)