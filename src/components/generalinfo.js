import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class GeneralInfo extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '', 

        };
        this.saveFirstName = this.saveFirstName.bind(this);
        this.saveLastName = this.saveLastName.bind(this);
        this.saveEmail = this.saveEmail.bind(this);
        this.savePhoneNumber = this.savePhoneNumber.bind(this);
        this.updateInfo =this.updateInfo.bind(this);
    }

    saveFirstName(event) {
        this.setState({firstNameInput: event.target.value});
    }

    saveLastName(event) {
        this.setState({lastNameInput: event.target.value});
    }

    saveEmail(event) {
        this.setState({emailInput: event.target.value});
    }

    savePhoneNumber(event) {
        this.setState({phoneNumberInput: event.target.value});
    }
    // This should update the info from the different feilds then render the updated content
    updateInfo(event) {
        //These shoudl all have updated states already updated on any change to specific form feild. 
        let {firstNameInput, lastNameInput, emailInput, phoneNumberInput} = this.state;
        // series of states updated
        this.setState({firstName: firstNameInput});
        this.setState({lastName: lastNameInput});
        this.setState({email: emailInput});
        this.setState({phoneNumber: phoneNumberInput});
        // Trying to add a function to render the information now stored in the compoenent
        

        //THIS IS WHAT i AM TRYING TO GET TO RENDER ON SUBMIT
        const currentInfo = (
            <div>
                <h2>{this.state.firstName}</h2>
                <h2>{this.state.lastName}</h2>
                <h2>{this.state.email}</h2>
                <h2>{this.state.phoneNumber}</h2>
            </div>
        );
        alert();
        //ReactDOM.render(currentInfo, document.getElementById('generalInfoContainer'))
            
        event.preventDefault();
    }

    //THIS IS THE INITIAL RENDER THAT NEEDS TO BE SWAPPED WITH THE UPDATED INFO ON SUBMISSION
    render() {
        return (
            <div id='generalInfoContainer'>
                <form onSubmit={this.updateInfo}>
                    <label>
                        First Name:
                        <input type="text" value= {this.state.firstNameInput } onChange={this.saveFirstName}/>
                    </label>
                    <label>
                        Last Name: 
                        <input type="text" value={this.state.lastNameInput} onChange={this.saveLastName}/>
                    </label>
                    <label>
                        Email:
                        <input type="email" value = {this.state.emailInput} onChange={this.saveEmail}/>
                    </label>
                    <label>
                        Phone Number:
                        <input type="tel" value = {this.state.phoneNumberInput}onChange={this.savePhoneNumber}/>
                    </label>
                    <input type="submit" value="submit" />
                
                </form>
            </div>
        )
    }
}
export default GeneralInfo; 