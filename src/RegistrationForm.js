import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
import App from "./App";

const statusOptions = [
    { value: 'undergrad', label: 'Undergraduate Student' },
    { value: 'grad', label: 'Graduate Student' },
    { value: 'prof', label: 'Professor' },
    { value: 'industry', label: 'Industry Employee' },
];

const paymentOptions = [
    { value: 'credit', label: 'Credit Card' },
    { value: 'dedit', label: 'Dedit Card' },
    { value: 'paypal', label: 'PayPal' },
];

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            address: '',
            email: '',
            school: '',
            startDate: new Date(),
            status: null,
            payment: null,
        };
    }

    isValidName(name) {
        return new RegExp(" ^[a-zA-Z]*$").test(name);
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleDateChange = (date) => {
        this.setState({
            startDate: date
        });
    }

    handleStatusChange = (selection) => {
        this.setState({ status: selection });
    }

    handlePaymentChange = (selection) => {
        this.setState({ payment: selection });
    }

    handleSubmit = (event) => {
        let canSubmit = true;
        let message = "";
        if (!this.isValidName(this.state.firstName)) {
            canSubmit = false;
            message += "\nInvalid First Name: Must contain letters";
        }
        if (!this.isValidName(this.state.lastName)) {
            canSubmit = false;
            message += "\nInvalid Last Name: Must contain letters";
        }
        if (canSubmit) {
            alert('A first name was submitted: ' + this.state.firstName);
        } else {
            alert(message);
        }
        event.preventDefault();
    }

    render() {
        const { statusOption } = this.state;
        const { paymentOption } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    First Name:
                    <input type="text" name='firstName' value={this.state.firstName} onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    Last Name:
                    <input type="text" name='lastName' value={this.state.lastName} onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    Address:
                    <input type="text" name='address' value={this.state.address} onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    Email:
                    <input type="text" name='email' value={this.state.email} onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    School:
                    <input type="text" name='school' value={this.state.school} onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    Date:
                    <DatePicker selected={this.state.startDate} onChange={this.handleDateChange} />
                </label>
                <br/>
                <label>
                    Status:
                    <Select value={this.state.status} onChange={this.handleStatusChange} options={statusOptions}/>
                </label>
                <br/>
                <label>
                    Payment:
                    <Select value={this.state.payment} onChange={this.handlePaymentChange} options={paymentOptions}/>
                </label>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default RegistrationForm;