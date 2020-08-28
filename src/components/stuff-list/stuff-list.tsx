import React from "react";
import './stuff-list.css'
import {StuffListPropsType} from "../../ts-types/props-types";



const StuffList: React.FC<StuffListPropsType>  = ({items,paginationList,getPreviousPage,numberPage,getNextPage}) => (
    <div className="d-flex flex-column align-items-center ">
        {items}
        <nav aria-label="Page navigation example">
            {items.length!==0?
                <ul className="pagination justify-content-center">
                    {paginationList}
                    <button disabled={numberPage===0}  className="btn btn-secondary" onClick={getPreviousPage}>
                        Previous
                    </button>
                    <button disabled={numberPage+1 === paginationList.length} className="btn btn-secondary" onClick={getNextPage}>
                        Next
                    </button>
                </ul>:
                null
            }
        </nav>
    </div>
)




export default StuffList