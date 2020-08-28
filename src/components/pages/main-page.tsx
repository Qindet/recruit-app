import React from "react";
import StuffListContainer from "../../containers/stuff-list-container";
import ModalContainer from "../../containers/modal-container";

const MainPage = () => (
    <div>
    <ModalContainer />
        <div className="container-lg stuff-list-main">

            <StuffListContainer />
        </div>

    </div>
)

export default MainPage