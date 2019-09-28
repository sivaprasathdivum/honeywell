import React from 'react';
import logo from './logo.svg';
import './App.css';

const wrapper = {
    marginTop: '80px',
    marginBottom: '20px'
};
const formSignIn = {
    maxWidth: '420px',
    padding: '30px 38px 66px',
    margin: '0 auto',
    backgroundColor: '#eee',
    border: '3px dotted rgba(0,0,0,0.1)'
};
const color = {
    backgroundColor: 'rgb(212, 127, 200)'
};
class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isLogged: false
        };
    }

    mySubmitHandler = (e) => {
        e.preventDefault();
        console.log(this.state.username, 'css');
        const user = this.state.username;
        const pass = this.state.password;
        fetch('http://192.168.43.39:8080/devices/user/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: this.state.username, password: this.state.password })
        });
        // if (user && pass) {
        //     alert('logged in');
        //     this.setState({
        //         username: '',
        //         password: '',
        //         isLogged: true
        //     });
        //     this.props.history.push('/home');

        // } else {
        //     console.log('invalid login details');
        // }
    }
    onChange = (e) => {
        const name = e.target.name;
        const val = e.target.value;
        this.setState({ [name]: val });
    };

    // onRowClick(e, t, rowInfo) {
    //     console.log(rowInfo);
    //     this.props.history.push('/Detail', rowInfo);
    // }


    render() {
        return (
            < div className="container" styles={color}>
                <div className={wrapper}>
                    <form action method="post" name="Login_Form" onSubmit={this.mySubmitHandler} className={formSignIn}>
                        <h3 className="form-signin-heading">Login To IOT Application</h3>
                        <hr className="colorgraph" /><br />
                        <input type="text" className="form-control" value={this.state.username} name="username" onChange={this.onChange.bind(this)} placeholder="Username" required autofocus />
                        <input type="password" className="form-control" value={this.state.password} onChange={this.onChange.bind(this)} name="password" placeholder="Password" required />
                        <button className="btn btn-lg btn-primary btn-block" name="Submit" value="Login" type="Submit">Login</button>
                    </form>
                </div>
            </div >
        );

    }
}

export default Login;