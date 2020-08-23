import React from "react";
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'

import {connect} from 'react-redux'
import {addPositionLoaded} from "../../actions/position-operations";

const Schema = Yup.object().shape({
    positionName: Yup.string()
        .min(2, 'Too Short!')
        .max(30, 'Too Long!')
        .required('Required'),
    salary: Yup.number()
        .min(1, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required')
});


const NewPositionForm = (props) => {


    return (
       <>
           <h1>Add new position</h1>
           <Formik
               initialValues={{
                   positionName: '',
                   salary: ''
               }}
               validationSchema={Schema}
               onSubmit={values => {
                   props.addPosition(values)
               }}
           >
               {({ errors, touched,handleReset }) => (
                   <Form>
                       <div className="form-group">
                           <label htmlFor="positionName">Position name</label>
                           <Field  className="form-control" name="positionName" id="positionName" />
                           {errors.positionName && touched.positionName ? (
                               <div>{errors.positionName}</div>
                           ) : null}
                       </div>
                       <div className="form-group">
                           <label htmlFor="salary">Salary</label>
                           <Field className="form-control" name="salary" id="salary"/>
                           {errors.salary && touched.salary ? (
                               <div>{errors.salary}</div>
                           ) : null}
                       </div>
                       <button type="submit" className="btn btn-primary">Submit</button>
                   </Form>
                   )}
           </Formik>



       </>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        addPosition: (item) => dispatch(addPositionLoaded(item))
    }
}

export default connect(null,mapDispatchToProps)(NewPositionForm)