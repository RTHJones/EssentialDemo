import React, {Component} from 'react';

class Profile extends Component {

    // State here is used only to store a friends list array, which could be modified with further text-entry fields subject to client requirements
    state = {
        friends : [' Leela', ' Fry', ' Hermes']
    }
    render() {
        const {first, last, dob, activity, color}= this.props;
        const {friends} = this.state;
        return (

            // The profileCard is a container which holds the picture and the data as two items. 
            // The data is also a container holding the <p> tags which are displayed as a column.
            <div className="profileCard" >
                <img className='profilePic' src='https://i.dailymail.co.uk/1s/2019/10/26/01/20203998-0-image-m-2_1572050636299.jpg' alt='An accurate likeness of the author of this page!'/>
                <div className='profileData'>
                    <p>Name: {`${first} ${last}`}</p>
                    <br />
                    <p>Date of Birth: {dob}</p>
                    <br />
                    <p>Favourite Activity: {activity}</p>
                    <br/>
                    <p>Favourite Colour: {color}</p>
                    <br/>
                    <p>Friends: {friends.toString()}</p>
                    <br/>
                    <p>Last Login: {this.props.lastLogin}</p>
                    <br/>
                </div>
            </div>
        );
    }
};

export default Profile;