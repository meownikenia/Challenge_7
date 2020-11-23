import React from 'react'

export const UserSearch = ({onChangeSearch,searchuser,searchinguser}) => {
    return(
        <div className="UserSearch">
            <form>
                <div className="row">
                    <div className="form-group col-md-6">
                        <input type="text" onChange={(e) => onChangeSearch(e)} className="form-control" name="keyword" value={searchuser} id="keyword" aria-describedby="usersearchHelp" placeholder="Search User"/>
                    </div>
                    <div className="form-group col-md-6">
                    <button type="button" className="btn btn-success" onClick={(e) => searchinguser()}>Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}