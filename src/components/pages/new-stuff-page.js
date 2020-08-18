import React from "react";
import NewStuffForm from "../forms/new-stuff-form";

const NewStuffPage = () => {
    const style = {
        marginTop: '5%',
        maxWidth: '800px'
    }
    const  initialValues = {
        firstName: '',
            lastName: '',
            address: '',
            position: '',
            email: '',
            fileControl: ''
    }
    return (
        <div className="container-sm" style={style}>
            <h1>Add new stuff member</h1>
            <NewStuffForm initialValues={initialValues} flag="submit"/>
        </div>
    )
}



export default NewStuffPage