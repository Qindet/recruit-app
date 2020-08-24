import React from 'react'
import PositionListContainer from "../../containers/positions-list-container";

const PositionPage = () => {

    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Positions list</h1>
                    <p className="lead">This is a list of positions in the company</p>
                </div>
            </div>
            <PositionListContainer />
        </div>
    )
}

export default PositionPage