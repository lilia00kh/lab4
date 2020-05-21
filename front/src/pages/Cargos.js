import React, {useState} from "react";
import {useHttp} from "../hooks/http.hook";

export const Cargos = ()=>{
    const {request}=useHttp()
    const [form,setForm] = useState({
        id:'',code:'',name:'',mass:''
    })
    const [form2,setForm2] = useState({
        id:''
    })
    const tableM={}

    function showBody() {
        const data=request('/cargos/add','GET')
    }
    const changeHandler = event =>{
        setForm({...form, [event.target.name]: event.target.value})
    }
    const changeHandler2 = event =>{
        setForm2({...form2, [event.target.name]: event.target.value})
    }
    const find = e =>{
        e.preventDefault();
        const data=request('/cargos/find','POST',{...form2})
    }
    const deleteId = (e) =>{
        e.preventDefault();
        const data=request('/cargos/delete','delete',{...form2})
    }
    const add = e =>{
        e.preventDefault();
        const data=request('/cargos/add','POST',{...form})
    }
    return(
        <div>
            <h3>вантаж</h3>
            <form className="form-inline">
                <div className="form-group">
                    <label>ID</label>
                    <input type="number" className="form-control" id="inputId" name="id" onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label>Код</label>
                    <input type="number" className="form-control" id="inputCapacity" name="code" onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label>Назва</label>
                    <input type="text" className="form-control" id="inputNumber" name="name" onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label>Маса</label>
                    <input type="number" className="form-control" id="inputNecessity" name="mass" onChange={changeHandler}/>
                </div>
                <button type="submit" className="btn btn-primary" id="createUserButton" onClick={add}>Додати</button>
            </form>
            <form className="form-inline">
                <div className="form-group">
                    <label>Знайти за id</label>
                    <input type="number" className="form-control" name="id" id="inputWhatToFind" onChange={changeHandler2}/>
                    <button type="submit" className="btn btn-primary" id="findUserButton" onClick={find}>Знайти</button>
                    <button type="submit" className="btn btn-primary" id="findUserButton" onClick={deleteId}>Видалити</button>
                </div>
            </form>
            <button type="submit" className="btn btn-primary" id="findUserButton" onClick={showBody}>Показати</button>
            <table id="cargosList" className="table">
                <thead className="nav">
                <th>Id</th>
                <th>Код</th>
                <th>Назва</th>
                <th>Маса</th>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    );
}