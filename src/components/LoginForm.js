import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
// 1.2-import connect and emailChanged
import {connect} from 'react-redux';
import { emailChanged, passwordChanged, loginUser} from '../actions';


class LoginForm extends Component{
    static navigationOptions = {
        title: "LoginForm"
      };
    onEmailChange(text){
    // 3.2-access the action , and pass the text enterd by user to function emailChanged(text)
    this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    onButtonPress(){
        const {email, password} = this.props;
        this.props.loginUser({email, password});
    }

    renderError(){
        //if error = '' (will be false) if error = 'something' (will be true)
        if(this.props.error){
            return(
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>
                    {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton(){
        if(this.props.loading){
            return(
                <Spinner size="large" />
            );
        }
        else{
            return(
            <Button onPress={this.onButtonPress.bind(this)}>
                  Login
            </Button>
            );
        }
    }
    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                    label="Email"
                    placeholder="email@gmail.com"
                    // 3.1- wire this to helper method above
                    onChangeText={this.onEmailChange.bind(this)}
                    // 10- below we wire component state ( which has reducer state ) to update our input box
                    value={this.props.email}
                     />
                </CardSection>


                <CardSection>
                    <Input
                    label="Password"
                    placeholder="password"
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}
const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};
// 8- create this function ( 7 from reducer ) to connect reducer state with this component state
const mapStateToProps = ({auth}) => {
    const {email, password, error, loading } = auth;
    return {email,password,error,loading};
};

// 2-connect react component to actions
// first arg is for reducers to connect with react. Now component have the props from reducer
//second arg is for actions
export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);
// 9-above we connect (mapStateToProps, ... )  