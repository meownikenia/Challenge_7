import React from 'react'

export const SearchResults = ({result}) => {

    console.log('result length:::', result.length)
    if (result.length === 0) return null

    const UserRow = (user,index) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  <td>{index + 1}</td>
                  <td>{user.email}</td>
                  <td> <a href="#"className = "btn btn-warning">edit</a> </td>
              </tr>
          )
    }

    const userTable = result.map((user,index) => UserRow(user,index))

    return(
        <div className="container">
            <h2>Result</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>User Id</th>
                    <th>Email</th>
                    <th>Option</th>
                </tr>
                </thead>
                <tbody>
                    {userTable}
                </tbody>
            </table>
        </div>
    )
}