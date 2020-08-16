import React from "react";
import NewStuffForm from "../forms/new-stuff-form";

const NewStuffPage = () => {
    const style = {
        marginTop: '5%',
        maxWidth: '800px'
    }
    return (
        <div className="container-sm" style={style}>
            <h1>Add new stuff member</h1>
            <NewStuffForm />
        </div>
    )
}



export default NewStuffPage