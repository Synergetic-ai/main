import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Alert, Button, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input, Label } from 'reactstrap';
import Widget from '../../components/Widget';
import { registerUser, registerError } from '../../actions/register';
import microsoft from '../../images/microsoft.png';
import Login, {isAuthenticated} from '../testLogin';
// import Login from '../login';

const Register = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const changeEmail = (event) => {
        setEmail(event.target.value);
    }

    const changePassword = (event) => {
        setPassword(event.target.value);
    }

    const changeConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    }

    const checkPassword = () => {
        if (!isPasswordValid()) {
            if (!password) {
                props.dispatch(registerError("Password field is empty"));
            } else {
                props.dispatch(registerError("Passwords are not equal"));
            }
            setTimeout(() => {
                props.dispatch(registerError());
            }, 3 * 1000)
        }
    }

    const isPasswordValid = () => {
       return password && password === confirmPassword;
    }

    const doRegister = (event) => {
        event.preventDefault();
        if (!isPasswordValid()) {
            checkPassword();
        } else {
            props.dispatch(registerUser({
                creds: {
                    email: email,
                    password: password
                },
                history: props.history
            }));
        }
    }

    const {from} = props.location.state || {from: {pathname: '/app'}}; // eslint-disable-line

    // cant access login page while logged in
    if (isAuthenticated(JSON.parse(localStorage.getItem('authenticated')))) {
        return ( <Redirect to={from}/> )
    } else {
        return (
            <div className="auth-page">
                <Container>
                    <Widget className="widget-auth mx-auto" title={<h3 className="mt-0">Login to your Web App</h3>}>
                        <p className="widget-auth-info">
                            Please fill all fields below.
                        </p>
                        <form onSubmit={doRegister}>
                            {
                                props.errorMessage && (
                                    <Alert className="alert-sm widget-middle-overflow rounded-0" color="danger">
                                        {props.errorMessage}
                                    </Alert>
                                )
                            }
                            <FormGroup className="mt">
                                <Label for="email">Email</Label>
                                <InputGroup className="input-group-no-border">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="la la-user text-white"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input id="email" className="input-transparent pl-3" value={email}
                                           onChange={changeEmail} type="email"
                                           required name="email" placeholder="Email"/>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <InputGroup className="input-group-no-border">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="la la-lock text-white"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input id="password" className="input-transparent pl-3" value={password}
                                           onChange={changePassword} type="password"
                                           required name="password" placeholder="Password"/>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label for="confirmPassword">Confirm</Label>
                                <InputGroup className="input-group-no-border">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="la la-lock text-white"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input id="confirmPassword" className="input-transparent pl-3" value={confirmPassword}
                                           onChange={changeConfirmPassword} onBlur={checkPassword} type="password"
                                           required name="confirmPassword" placeholder="Confirm"/>
                                </InputGroup>
                            </FormGroup>
                            <div className="bg-widget-transparent auth-widget-footer">
                                <Button type="submit" color="danger" className="auth-btn"
                                        size="sm" style={{color: '#fff'}}>{props.isFetching ? 'Loading...' : 'Register'}</Button>
                                <p className="widget-auth-info mt-4">
                                    Already have the account? Login now!
                                </p>
                                <Link className="d-block text-center mb-4" to="login">Enter the account</Link>
                                <div className="social-buttons">
                                    <Button color="primary" className="social-button">
                                        <i className="social-icon social-google"/>
                                        <p className="social-text">GOOGLE</p>
                                    </Button>
                                    <Button color="success" className="social-button">
                                        <i className="social-icon social-microsoft"
                                           style={{backgroundImage: `url(${microsoft})`}}/>
                                        <p className="social-text" style={{color: '#fff'}}>MICROSOFT</p>
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </Widget>
                    {/*<Widget className="widget-auth mx-auto" title={<h3 className="mt-0">Create an account</h3>}>*/}
                        {/*<p className="widget-auth-info">*/}
                            {/*Please fill all fields below*/}
                        {/*</p>*/}
                        {/*<form className="mt" onSubmit={this.doRegister}>*/}
                            {/*{*/}
                                {/*this.props.errorMessage && (*/}
                                    {/*<Alert className="alert-sm" color="danger">*/}
                                        {/*{this.props.errorMessage}*/}
                                    {/*</Alert>*/}
                                {/*)*/}
                            {/*}*/}
                            {/*<div className="form-group">*/}
                                {/*<input className="form-control no-border" value={this.state.email}*/}
                                       {/*onChange={this.changeEmail} type="text" required name="email"*/}
                                       {/*placeholder="Email"/>*/}
                            {/*</div>*/}
                            {/*<div className="form-group">*/}
                                {/*<input className="form-control no-border" value={this.state.password}*/}
                                       {/*onChange={this.changePassword} type="password" required name="password"*/}
                                       {/*placeholder="Password"/>*/}
                            {/*</div>*/}
                            {/*<div className="form-group">*/}
                                {/*<input className="form-control no-border" value={this.state.confirmPassword}*/}
                                       {/*onChange={this.changeConfirmPassword} onBlur={this.checkPassword} type="password" required name="confirmPassword"*/}
                                       {/*placeholder="Confirm"/>*/}
                            {/*</div>*/}
                            {/*<Button type="submit" color="inverse" className="auth-btn mb-3" size="sm">{this.props.isFetching ? 'Loading...' : 'Register'}</Button>*/}
                            {/*<p className="widget-auth-info">or sign up with</p>*/}
                            {/*<div className="social-buttons">*/}
                                {/*<Button onClick={this.googleLogin} color="primary" className="social-button mb-2">*/}
                                    {/*<i className="social-icon social-google"/>*/}
                                    {/*<p className="social-text">GOOGLE</p>*/}
                                {/*</Button>*/}
                                {/*<Button onClick={this.microsoftLogin} color="success" className="social-button">*/}
                                    {/*<i className="social-icon social-microsoft"*/}
                                       {/*style={{backgroundImage: `url(${microsoft})`}}/>*/}
                                    {/*<p className="social-text">MICROSOFT</p>*/}
                                {/*</Button>*/}
                            {/*</div>*/}
                        {/*</form>*/}
                        {/*<p className="widget-auth-info">*/}
                            {/*Already have the account? Login now!*/}
                        {/*</p>*/}
                        {/*<Link className="d-block text-center" to="login">Enter the account</Link>*/}
                    {/*</Widget>*/}
                </Container>
                <footer className="auth-footer">
                    2020 &copy; Sing App - React Admin Dashboard Template.
                </footer>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isFetching: state.register.isFetching,
        errorMessage: state.register.errorMessage,
    };
}

export default withRouter(connect(mapStateToProps)(Register));

