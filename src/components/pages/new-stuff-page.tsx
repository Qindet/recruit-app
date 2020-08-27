import React from "react";
import NewStuffForm from "../forms/new-stuff-form";
import {StuffItemType} from "../../ts-types/main-types";

const NewStuffPage = () => {
    const style = {
        marginTop: '5%',
        maxWidth: '800px'
    }
    const  initialValues: StuffItemType = {
        firstName: '',
            lastName: '',
            address: '',
            position: '',
            email: ''
    }
    return (
        <div className="container-sm" style={style}>
            <h1>Add new stuff member</h1>
            <NewStuffForm initialValues={initialValues} flag="submit"/>
        </div>
    )
}



export default NewStuffPage