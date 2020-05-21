import React, {useState} from "react";
import {useHttp} from "../hooks/http.hook";
import {Link} from "react-router-dom";
import SimpleTable from "../Todo/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

function click2(e) {
    return(<h1>Helllo</h1>)
    // console.log("tyt")
    // array.map((row) => {
    //     return(
    //         <table key={row.id}>
    //             <th >
    //                 {row.name}
    //             </th>
    //             <td >{row.id}</td>
    //             <td >{row.name}</td>
    //             <td >{row.mass}</td>
    //             <td >{row.capacity}</td>
    //         </table>
    //     )})
}

export const Planets = ()=>{
    const {request}=useHttp()
    let a =[
        {_id: "5ec39727b83aa509e82dc0a7", id: 123, name: "mars", mass: 10, capacity: 10},
     {_id: "5ec3a20f6f2d392ed48fb692", id: 1342, name: "k", mass: 1, capacity: 1}
]

    let array =[]
    async function click(e) {
        await fetch('/planets/add')
            .then(response => response.json())
            .then(data => {
                array.splice(0, array.length)
                data.forEach(element => array.push(element));
            });
        console.log(array)
        return array
    }
    click()
    let array2 = array
    console.log("array2",array2)

    let tableContent = array2.map((row,index) => {
            return(
                <div>
                    <li className="nav-item" key={index}>
                        <a className="nav-link active" >{row.id}</a>
                    </li>
                </div>

            )
    })
    console.log("tableContent",tableContent)
    const [form,setForm] = useState({
        id:'',name:'',mass:'',capacity:''
    })
    const [form2,setForm2] = useState({
        id:''
    })
    const button ={
        buttonStatus:false
    }


    function changeButtonStatus() {
        return button.buttonStatus=!button.buttonStatus
    }



    //console.log(tableContent)
    const changeHandler = event =>{
        setForm({...form, [event.target.name]: event.target.value})
    }
    const changeHandler2 = event =>{
        setForm2({...form2, [event.target.name]: event.target.value})
    }
    const find = e =>{
            e.preventDefault();
            const data=request('/planets/find','POST',{...form2})
    }
    const deleteId = (e) =>{
            e.preventDefault();
            const data=request('/planets/delete','delete',{...form2})
    }
    const add = e =>{
            e.preventDefault();
            const data=request('/planets/add','POST',{...form})
    }
    return(
        <div>
            <div>
                {tableContent}
            </div>
            <h3>Планети</h3>
            <form className="form-inline">
                <div className="form-group">
                    <label>ID</label>
                    <input type="number" className="form-control" id="inputId" name="id" onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label>Назва</label>
                    <input type="text" className="form-control" id="inputNumber" name="name" onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label>Маса</label>
                    <input type="number" className="form-control" id="inputNecessity" name="mass" onChange={changeHandler}/>
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
            <button type="submit" className="btn btn-primary" id="findUserButton" onClick={click}>Показати</button>
            <button type="submit" className="btn btn-primary" id="findUserButton" onClick={changeButtonStatus}>Показати2</button>
            <SimpleTable array={array2}/>
        </div>
    );
}
