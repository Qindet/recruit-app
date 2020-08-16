import React from "react";
import NewPositionForm from "../forms/new-position-form";


const NewPositionPage = () => {
    const style = {
        marginTop: '5%',
        maxWidth: '800px'
    }
    return (
        <div className="container" style={style}>
            <NewPositionForm />
        </div>
    )
}

export default NewPositionPage