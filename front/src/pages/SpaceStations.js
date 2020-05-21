import React, {useState} from "react";
import {Route} from "react-router-dom";
import {useHttp} from "../hooks/http.hook";
// import Table1 from "../Todo/Table1";

export const SpaceStations = ()=>{
    const {loading,error,request,request2,table}=useHttp()
    const [form,setForm] = useState({
        id:'',number:'',necessity:'',capacity:''
    })
    const [form2,setForm2] = useState({
        id:''
    })
    const tableM={}

    function showBody() {
        let tableContent = '';
        const data=request('/spaceStations/add','GET')


    }
    const changeHandler = event =>{
        setForm({...form, [event.target.name]: event.target.value})
    }
    const changeHandler2 = event =>{
        setForm2({...form2, [event.target.name]: event.target.value})
    }
    const find = e =>{
        try {
            e.preventDefault();
            const data=request('/spaceStations/find','POST',{...form2})
        }
        catch (e) {

        }
    }
    const deleteId = (e) =>{
        try {
            e.preventDefault();
            const data=request('/spaceStations/delete','delete',{...form2})
        }
        catch (e) {

        }
    }
    const add = e =>{
        try {
            e.preventDefault();
            const data=request('/spaceStations/add','POST',{...form})


        }
        catch (e) {

        }
    }
    return(
        <div>
            <h3>Космічні станції</h3>
            <form className="form-inline">
                <div className="form-group">
                    <label>ID</label>
                    <input type="number" className="form-control" id="inputId" name="id" onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label>Номер</label>
                    <input type="text" className="form-control" id="inputNumber" name="number" onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label>Необхідність</label>
                    <input type="number" className="form-control" id="inputNecessity" name="necessity" onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label>Місткість</label>
                    <input type="number" className="form-control" id="inputCapacity" name="capacity" onChange={changeHandler}/>
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
            <table id="spaceStationsList" className="table">
                <thead className="nav">
                <th>Id</th>
                <th>Номер</th>
                <th>Необхідність</th>
                <th name="capacity" >Місткість</th>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    );
}