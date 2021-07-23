import React, { useState } from "react";
import axios from 'axios'



const AddOrder = () => {
    

    const [name, setName] = useState("");
    const [phone , setPhone] = useState("");
    const [item1, setItem1] = useState("");
    const [item2, setItem2] = useState("");
    const [item3, setItem3] = useState("");
   



    const changeOnClick = e => {
        e.preventDefault();


        const orders = {
            name,phone ,item1,item2,item3
        }

        axios.post("/orders/addo", orders)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    };


    return (

        <div>

            <form   className="formContainer"    onSubmit={changeOnClick} encType="multipart/form-data" >
                <div className="form-group">
                    <label htmlFor="name">Title</label>
                    <input type="text"
                        onChange={e => setName(e.target.value)}
                        className="form-control" id="name"  placeholder="Enter name " />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Author :</label>
                    <input type="text"
                        onChange={e => setPhone(e.target.value)}
                        className="form-control" id="phone"  placeholder="Enter phone No" />
                </div>
                <div className="form-group">
                    <label htmlFor="item1">Content: </label>
                    <input type="text"
                        onChange={e => setItem1(e.target.value)}
                        className="form-control" id="item1"  placeholder="Enter item1" />
                </div>
                <div className="form-group">
                <label htmlFor="item2">Content: </label>
                    <input type="text"
                        onChange={e => setItem2(e.target.value)}
                        className="form-control" id="item2"  placeholder="Enter item2" />
                   
                </div>
                <div className="form-group">
                <label htmlFor="item3">Content: </label>
                    <input type="text"
                        onChange={e => setItem3(e.target.value)}
                        className="form-control" id="item3"  placeholder="Enter item3" />
                   
                </div>
                <div className="submit_div" ><button  className="submit_btn" type="submit" >Submit</button></div>

            </form>
        </div>
    )
}

export default AddOrder
