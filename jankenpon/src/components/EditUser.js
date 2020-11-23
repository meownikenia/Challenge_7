import React from 'react'


const EditUser = ({onChangeForm, editUser}) => {


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                <h2>Edit User</h2>
                <form>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="email" />
                        </div>
                        
                        <div className="form-group col-md-12">
                            <label htmlFor="exampleInputEmail1">Password</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="password" id="password" aria-describedby="emailHelp" placeholder="Password" />
                        </div>
                    </div>
                    <button type="button" onClick= {(e) => editUser()} className="btn btn-danger">Create</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default EditUser