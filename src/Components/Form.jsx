import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AiFillEyeInvisible,AiFillEye } from "react-icons/ai";

export default function SignUp() {

    // localStorage data store
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [Passwordeye, setPasswordeye] = useState(false)
    const [RePasswordeye, setRePasswordeye] = useState(false)
 
    const PasswordShow =()=>{
        setPasswordeye(! Passwordeye);
    }

    const RePasswordShow =()=>{
        setRePasswordeye(!RePasswordeye);
    }
    const handle = () => {
        localStorage.setItem('UserName', Name)
        localStorage.setItem('Email', Email)
        localStorage.setItem('Password', Password)
    }

    // SignUp & Login Box hide and Show
    const [RegBox, setRegBox] = React.useState(true);
    const [LoginBox, setLoginBox] = React.useState(false);

    const ClickReg = () => {
        setRegBox(!RegBox);
        setLoginBox(!LoginBox);
    }

    return (
        <>
            {(RegBox && <div className="SignUp-Modal">
                <h2>Sign Up</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" className="form-control"
                            placeholder="enter username"
                            onChange={(e) => setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" className="form-control"
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type={(Passwordeye === false) ? "password" : 'text'} className="form-control"
                            placeholder="enter Password"
                            onChange={(e) => setPassword(e.target.value)} /> 

                    <div className="PasswordShow-eye"><AiFillEyeInvisible onClick={PasswordShow}/></div>
                         

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Confirm Your Password</Form.Label>
                        <Form.Control type={(RePasswordeye === false) ? "password" : 'text'}  className="form-control"
                            placeholder="Confirm Your Password" />
                    
                    <div className="PasswordShow-eye"><AiFillEyeInvisible onClick={RePasswordShow} /></div>
                    </Form.Group>

                    <Button variant="success" type="submit" onClick={handle} >
                        Submit
                    </Button>

                    <Button variant="danger" type="reset"> Cancel </Button>

                    <div>
                        <span> Already have an account? <a href='#Login' onClick={ClickReg}> Sign In</a></span>
                    </div>
                </Form>
            </div>)};


            {LoginBox && (<div className="SignIn-Modal">
                <h2>Sign In</h2>
                <Form.Group className="mb-3" controlId="formUser">
                    <Form.Label>Username</Form.Label>
                    <Form.Control  type="email"className="form-control"
                        placeholder="enter email-id" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" className="form-control"
                        placeholder="enter password" />
                </Form.Group>
                <Button variant="success" type="submit"> Login </Button>
                <span className="SignUp-btn">Don't have an account? <a href="SignUp" onClick={ClickReg}>Register Now</a></span>
            </div>)};

        </>
    );
}