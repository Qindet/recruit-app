import React from "react";
import './stuff-list.css'


const StuffList = (props) => (
    <div className="d-flex flex-column align-items-center ">
        {props.items}
        <nav aria-label="Page navigation example">
            {props.items.length!==0?
                <ul className="pagination justify-content-center">
                    {props.paginationList}
                    <button disabled={props.numberPage===0}  className="btn btn-secondary" onClick={props.getPreviousPage}>
                        Previous
                    </button>
                    <button disabled={props.numberPage+1 === props.paginationList.length} className="btn btn-secondary" onClick={props.getNextPage}>
                        Next
                    </button>
                </ul>:
                null
            }
        </nav>
    </div>
)




export default StuffList