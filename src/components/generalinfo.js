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
        
        const currentInfo = (
            <div>
                <h2>{this.state.firstName}</h2>
                <h2>{this.state.lastName}</h2>
                <h2>{this.state.email}</h2>
                <h2>{this.state.phoneNumber}</h2>
            </div>
        );
        ReactDOM.render(currentInfo, document.getElementById('generalInfoContainer'))
            
        event.preventDefault();
    }
    render() {
        return (
            <div id='generalInfoContainer'>
                <form onSubmit={this.updateInfo}>
                    <label>
                        First Name:
                        <input type="text" onChange={this.saveFirstName}/>
                    </label>
                    <label>
                        Last Name: 
                        <input type="text" onChange={this.saveLastName}/>
                    </label>
                    <label>
                        Email:
                        <input type="email" onChange={this.saveEmail}/>
                    </label>
                    <label>
                        Phone Number:
                        <input type="tel" onChange={this.savePhoneNumber}/>
                    </label>
                    <input type="submit" value="submit" />
                
                </form>
            </div>
        )
    }
}
export default GeneralInfo; 