import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'
import { Users } from './components/Users'
import { SearchResults } from './components/SearchResults'
import { DisplayBoard } from './components/DisplayBoard'
import CreateUser from './components/CreateUser'
import UserService  from './services/UserService'
import {UserSearch} from './components/UserSearch'
import {Modal,Button} from 'react-bootstrap'
import EditUser from './components/EditUser'

class App extends Component {
  state = {
    currentUser:null,
    currentUserEdit: {
      email: "",
      password: ""
    },
    currentIndex: -1,
    user: {},
    users: [],
    numberOfUsers: 0,
    searchuser: "",
    result:[],
    show:false,
    setShow: false,
  }

  componentDidMount(){
  this.getAllUsers()
  }
  handleClose = () => {
    console.log(this.state.setShow)
    this.setState({setShow: false, show: false})
  }
  handleShow = () => {
    console.log(this.state.setShow)
    this.setState({setShow: true, show: true})
}

  createUser = (e) => {
    UserService.createUser (this.state.user)
        .then(response => {
          console.log(response,this.state.numberOfUsers);
          this.setState({numberOfUsers: this.state.numberOfUsers + 1})
      });
  }

  setActiveUser(user, index){
    this.setState({
        currentUser: user,
        currentUserEdit: user,
        currentIndex: index
    })
}
  //Search
  onChangeSearch = (e) => {
    const searchuser = e.target.value
    this.setState({searchuser:searchuser})
  }

  //Search user
  searchinguser = () => {
    UserService.searchUsers (this.state.searchuser)
    .then(response=>{
     this.setState({
      result:response.data
     })
     console.log(response.data)
    })
    .catch(e=>{
      console.log(e)
    })
  }

  getAllUsers = () => {
    UserService.getAllUsers ()
      .then(users => {
        console.log(users)
        this.setState({users: users.data, numberOfUsers: users.length})
      });
  }

  onChangeForm = (e) => {
      let user = this.state.user
      if (e.target.name === 'email') {
          user.email = e.target.value;
      } else if (e.target.name === 'password') {
          user.password = e.target.value;
      }
      this.setState({user})
  }

  render() {
    
    return (
      <div className="App">
        <Header></Header>
        <div className="container mrgnbtm">
          <div className="row">
            <div className="col-md-8">
                <CreateUser 
                  user={this.state.user}
                  onChangeForm={this.onChangeForm}
                  createUser={this.createUser}
                  >
                </CreateUser>
            </div>
            <div className="col-md-4">
                <DisplayBoard
                  numberOfUsers={this.state.numberOfUsers}
                  getAllUsers={this.getAllUsers}
                >
                </DisplayBoard>
                <UserSearch
                  users={this.state.users}
                  onChangeSearch={this.onChangeSearch}
                  searchinguser ={this.searchinguser}
                  >
                  </UserSearch>
            </div>
          </div>
        </div>
        <div className="row mrgnbtm">
          <Users users={this.state.users} handleShow={this.handleShow}>

          </Users>
        </div>
        <div className="row mrgnbtm">
          <SearchResults result={this.state.result}></SearchResults>
        </div>
        <div>
        <Modal show={this.state.show} onHide={this.handleClose}>
    <Modal.Header>
        <Modal.Title>Edit User</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <EditUser user={this.state.user}
                onChangeForm={this.onChangeForm}
                editUser={this.editUser}
                >
      </EditUser>
    </Modal.Body>
    <Modal.Footer>
    <Button variant="secondary" onClick={this.handleClose}>
        Close
    </Button>
    <Button variant="primary" onClick={this.handleClose}>
        Save Changes
    </Button>
    </Modal.Footer>
</Modal>
        </div>
      </div>
    );
  }
}

export default App;