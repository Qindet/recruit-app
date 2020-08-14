import React, {useState} from "react";
import './new-stuff.css'
import recruitService from "../../service";
import {connect} from 'react-redux'
import {addStuff} from "../../actions";



const service = new recruitService()   //context
const NewStuff = (props) => {
    const [stuffForm, setStuffForm] = useState({
        name: '',
        email: '',
        position: ''
    })
    const onSubmitForm = async (e) => {
        e.preventDefault()
        const {data:{name}} = await service.postItem(stuffForm,'stuff')
        props.addStuff({...stuffForm,id:name})
        setStuffForm({name:'', email:'',position:''})
    }
    return (
       <div className="container-md">
           <h1>Add new stuff member</h1>
           <form onSubmit={onSubmitForm}>
               <div className="form-group">
                   <label htmlFor="nameControl">Name</label>
                   <input onChange={e => setStuffForm({...stuffForm,name:e.target.value})} type="text" className="form-control" id="nameControl"
                          value={stuffForm.name}
                          placeholder="name"/>
               </div>
               <div className="form-group">
                   <label htmlFor="emailControl">Email address</label>
                   <input onChange={e => setStuffForm({...stuffForm,email:e.target.value})}
                          value={stuffForm.email}
                          type="email" className="form-control" id="emailControl"
                          placeholder="name@example.com"/>
               </div>
               <div className="form-group">
                   <label htmlFor="jobControl">Choose job position</label>
                   <select onChange={e => setStuffForm({...stuffForm,position:e.target.value})}
                           value={stuffForm.position}
                           className="form-control" id="jobControl">
                       <option>1</option>
                       <option>2</option>
                       <option>3</option>
                       <option>4</option>
                       <option>5</option>
                   </select>
               </div>
               <div className="form-group">
                   <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
                   <select multiple className="form-control" id="exampleFormControlSelect2">
                       <option>1</option>
                       <option>2</option>
                       <option>3</option>
                       <option>4</option>
                       <option>5</option>
                   </select>
               </div>
               <div className="form-group">
                   <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                   <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
               </div>
               <button className="btn btn-primary">Submit</button>
           </form>
       </div>

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addStuff: (data) => dispatch(addStuff(data))
    }
}

export default connect(null,mapDispatchToProps)(NewStuff)