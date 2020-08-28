import React from "react";
import classes from './form-styles.module.css'
import {useFormik} from "formik";
import {NewStuffFormPropsType} from "../../ts-types/props-types";





const NewStuffForm: React.FC<NewStuffFormPropsType> = ({initialValues,flag,
                    updateHelper,submitHelper,updateStuffItem,closeModal,validate ,addStuffLoaded,positions}) => {

    const formik = useFormik({
        initialValues: {...initialValues},
        validate,
        onSubmit: values => {
            flag==='update'?
                updateHelper(values,updateStuffItem,closeModal)
                : submitHelper(addStuffLoaded,{...values,date:new Date().toDateString()},formik.resetForm)
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
                    {positions?
                        positions.map((item)=> <option
                            key={item.id}
                        >{item.positionName}</option>)
                        :<option>empty</option>}
                </select>

            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default NewStuffForm