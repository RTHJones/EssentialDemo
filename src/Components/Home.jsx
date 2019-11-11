import React, { Component } from 'react';
import Header from './Header';
import Fields from './Fields';
import Profile from './Profile';
import * as api from '../api' ;

class Home extends Component {

    // State here contains the values which are passed to the Profile Component via props. It also contains login history in an array
    state = {
        loginHistory: [],
        favColor: 'sienna',
        first : 'Robin',
        last : 'Jones',
        dob : '6/6/1980',
        favActivity : 'Coding'
    }
    render() {
        const {loginHistory, favColor, first, last, dob, favActivity} = this.state;
        return (
            <div>
                {/* The style tag here sets the background color to whatever colour has been chosen as favourite */}
                <style>{`body { background-color: ${favColor}; }`}</style>
                <Header/>
                {/* This button calls the changeColor function and hence sets both the profile favourite colour and the background colour */}
                <button className='taskButton' onClick={this.changeColor}>Change Colour!</button>
                {/* This button logs the loginHistory array to the console for viewing */}
                <button className='taskButton' onClick={this.logHistory}>Log history to console</button>
                {/* The last login date is sent via props as a new date on the first instance, to prevent an undefined or null value being sent and showing an empty field in the profile */}
                <Profile first={first} last={last} dob={dob} activity={favActivity} color={favColor} lastLogin={loginHistory[loginHistory.length] || new Date().toUTCString()}/>
                <Fields updateDetails={this.updateDetails}/>
            </div>
        );
    }

    // This function calls the api getColor function and receives a hex code back. It then sets favColor to the new value and logs the changes to console.
    changeColor = () => {
        const oldColor = this.state.favColor
        api.getColor()
            .then(data => {    
                console.log(`changing color to: ${data}`);
                this.setState({favColor: data})
                console.log(`color removed: ${oldColor}`)
            })            
    }

    // The next three functions deal with updating the login history, which is done on mount and on any update to state or change of details
    changeHistory = () => {
        this.state.loginHistory.push(new Date().toUTCString())
        console.log('new login date logged')
    }
    componentDidMount = () => {
        this.changeHistory()
    }
    componentDidUpdate = () => {
        this.changeHistory()
    }

    // This function simply logs the loginHistory array to the console
    logHistory = () => {
        console.log('Logging History...')
        console.log(this.state.loginHistory)
    }

    // This function is passed to the Fields Component via props, and allows that component to change the state here,
    // the new values are then passed down via props to update the Profile Component.
    // Any falsy values will not be used to update state and therefore empty fields submitted on the form will not clear existing data.
    updateDetails = (firstName, lastName, birthdate, activity, color) => {
        const {favColor, first, last, dob, favActivity} = this.state;
        this.setState({first: firstName || first, last: lastName || last, dob: birthdate || dob, favActivity: activity || favActivity, favColor: color || favColor})
        console.log('details updated in Home state')
    }
}

export default Home;