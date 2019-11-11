import React, {Component} from 'react';

class Fields extends Component  {

    // State here saves the changes made to the form, but does not control the profile data, 
    // this prevents the profile from updating until after form submission.
    state = {
        firstName: '',
        lastName: '',
        birthdate: '',
        activity: '',
        color: '',
    }

    render() {   
        const {firstName, lastName, birthdate, activity, color} = this.state     
        return (
            <div>
                {/* A simple form is used to capture any changes to the user data that are required 
                empty fields will not update the profile or state anywhere in the program*/}
                <form className='detailsForm' onSubmit={this.handleSubmit}> 
                    <h3>Update User Details</h3>
                    <label className='fieldLabel'>First Name : 
                        <input className='fieldInput' name='First Name' type="text" value={firstName} onChange={e => this.handleChange(e, 'firstName')}/>
                    </label>                
                    <label className='fieldLabel'>Last Name : 
                        <input className='fieldInput'name='Last Name' type="text"  value={lastName} onChange={e => this.handleChange(e, 'lastName')}/> 
                    </label>    
                    <label className='fieldLabel'>D.O.B. : 
                        <input className='fieldInput' name='DOB' type="text" value={birthdate} onChange={e => this.handleChange(e, 'birthdate')}/>
                        </label>                  
                    <label className='fieldLabel'>Favourite Activity : 
                        <input className='fieldInput' name='Favourite Activity' type="text" value={activity} onChange={e => this.handleChange(e, 'activity')}/> 
                    </label>   
                    <label className='fieldLabel'>Favourite Colour : 
                        <input className='fieldInput' name='Favourite Color' type="text" value={color} onChange={e => this.handleChange(e, 'color')}/>
                    </label>   
                    <input className='submitButton' type="submit" value="Submit" />
                </form>
            </div>
        );
    }

    // The handleChange function stores any data entered into the form in this components state
    handleChange = (event, input) => {
        console.log(`updating form:  ${event.target.name} is now ${event.target.value}`)
        this.setState({[input]: event.target.value});
    }

    // the handleSubmit function calls the updateDetails function from props, and changes state in the Home Component,
    // this then in turn updates the profile. State in this component is then reset to clear the form. 
    handleSubmit = (event) => {
        event.preventDefault()
        const {firstName, lastName, birthdate, activity, color} = this.state
        this.props.updateDetails(firstName, lastName, birthdate, activity, color)
        this.setState({firstName: '', lastName: '', birthdate: '', activity: '', color: ''})
        console.log('Form reset')

    }
};

export default Fields;