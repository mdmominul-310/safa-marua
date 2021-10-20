import React, { useState } from 'react';
import { Form ,Button, Container,} from 'react-bootstrap';
import { NavLink,useLocation,useHistory } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth/UseAuth';
import googleicon from '../../images/google.png'
import facebookicon from '../../images/facebook.png'

const Login = () => {
    // error handle state
    const[error,setError]=useState('');
    const {signInWithGoogle,signInwithEmailPass,emailHandle,passwordHanlde,loginWithFb}=UseAuth();
    //catch location and history
    const location=useLocation();
    const history=useHistory();
    const redirect_uri=location.state?.from ||'/home';
    //redirect inital page after login
    const handleGoolesignIn=()=>{
        signInWithGoogle()
        .then(result=>{
            history.push(redirect_uri);
        })
        .catch(error=>setError(error.message))
    }
    //redirect hanld for handlemail and password login
    const handleEmailPassLogin=()=>{
            signInwithEmailPass()
            .then(result=>{
                history.push(redirect_uri)
            })
            .catch(error=>setError(error.message))
    }
    //redirect handle for facebook login
    const handleFacebookLogin=()=>{
        loginWithFb()
        .then(result=>{
            history.push(redirect_uri)
            
        })
        .catch(error=>setError(error.message))
    }
    
    return (
        <Container className="my-5">
            
            <Container className="w-75 p-5">
            <h2 className="text-center text-primary shadow p-3 my-3">Please login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onBlur={emailHandle} />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onBlur={passwordHanlde}/>
                </Form.Group>
                <Form.Group>
                    <p className="text-danger">{error}</p>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <NavLink to="/register">Register?</NavLink>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={()=>handleEmailPassLogin()}>
                    Login
                </Button>
            </Container>
            {/* facebook login seystem and google login seystem  */}
            <Container className="w-75 d-flex justify-content-center">
                <Button className="btn btn-success my-5 me-5" onClick={()=>handleGoolesignIn()}> <img src={googleicon} alt="" /> Google Sign In</Button>
                <Button className="btn btn-success my-5" onClick={()=>handleFacebookLogin()}> <img src={facebookicon} alt="" /> Facebook Sign In</Button>
                
            </Container>
        </Container>
    );
    
};

export default Login;