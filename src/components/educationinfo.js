import React, { Component}from 'react';
import ReactDOM from 'react-dom';

class EducationInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formSubmitted: false,
            highSchoolName: "",
            tempHighSchoolName: "",
            focusOfStudy: "",
            tempFocusOfStudy: "",
            graduationDate: "",
            tempGraduationDate:"",
            collegeName: "",
            tempCollegeName: "",
            major: "",
            tempMajor: "",
            collegeGraduationDate: "",
            tempCollegeGraduationDate: "",
            anyFurtherEducation: "",
            tempAnyFurtherEducation: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.updateInfo = this.updateInfo.bind(this);
        this.updateInfo = this.updateInfo.bind(this);
        this.renderEducationInfo = this.renderEducationInfo.bind(this);
        this.changeFormSubmittedStatus = this.changeFormSubmittedStatus.bind(this);
    }
changeFormSubmittedStatus () {
    this.setstate({formSubmitted: false});
}
renderEducationInfo() {
    return (
        <div>
            <h2>{this.state.highSchoolName}</h2>
            <h2>{this.state.focusOfStudy}</h2>
            <h2>{this.state.graduationDate}</h2>
            <h2>{this.state.collegeName}</h2>
            <h2>{this.state.major}</h2>
            <h2>{this.state.collegeGraduationDate}</h2>
            <h2>{this.state.anyFurtherEducation}</h2>
            <button onClick = {this.changeFormSubmittedStatus}>Edit</button>
        </div>
        
    );
}
handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState ({
        [name]: value
    });
}
updateInfo(event) {
    event.preventDefault();
    this.setState ({
        formSubmitted: true, 
        highSchoolName: this.tempHighSchoolName,
        focusOfStudy: this.tempFocusOfStudy,
        graduationDate: this.tempGraduationDate,
        collegeName: this.tempCollegeGraduationDate,
        major: this.tempMajor,
        collegeGraduationDate: this.tempCollegeGraduationDate,
        anyFurtherEducation: this.tempAnyFurtherEducation
       
    });
}


renderForm() {
    return (
        <div id="educationContainer">
            <form onSubmit = {this.updateInfo}>
            <label>
                High School:
                <input
                name = "tempHighSchoolName"
                type = "text"
                //value = {this.state.highSchoolName}
                onChange = {this.handleInputChange}
                />
            </label>
            <label>
                Focus of Study:
                <input
                name = "tempFocusOfStudy"
                type = "text"
                //value = {this.state.focusOfStudy}
                onChange = {this.handleInputChange}
                />
            </label>
            <label>
                High School Graduation Date:
                <input
                name = "tempGraduationDate"
                type = "date"
                //value = {this.state.graduationDate}
                onChange = {this.handleInputChange}
                />
            </label>
            <label>
                College:
                <input
                name = "tempCollegeName"
                type = "text"
                //value = {this.state.collegeName}
                onChange = {this.handleInputChange}
                />
            </label>
            <label>
                College Major:
                <input
                name = "tempMajor"
                type = "text"
                //value = {this.state.major}
                onChange = {this.handleInputChange}
                />
            </label>
            <label>
                collegeGraduationDate:
                <input
                name = "tempCollegeGraduationDate"
                type = "date"
                //value = {this.state.collegeGraduationDate}
                onChange = {this.handleInputChange}
                />
            </label>
            <label>
                Any Further Education:
                <input
                name = "tempAnyFurtherEducation"
                type = "text"
                //value = {this.state.anyFurtherEducation}
                onChange = {this.handleInputChange}
                />
            </label>
            <button onClick = {this.changeFormSubmittedStatus}>
                        Cancel
                    </button>
            <input type="submit" value="submit" />
        </form>
        </div>
    );
}

render() {
    const {formSubmitted} = this.state;

    return (!formSubmitted ? (
        this.renderForm()
    ) : (
        this.renderEducationInfo()
    ));
}
}

export default EducationInfo;