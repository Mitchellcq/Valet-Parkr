import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            geolocation: '',
            cost: '',
            image: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            address: event.target.address,
            geolocation: event.target.geolocation,
            cost: event.target.cost,
            image: event.target.image
        });
    }

    handleSubmit(event) {
        alert('Your parking space has been submitted: ' + this.state);
        event.preventDefault();
    }

    onFileChange = event => {

        // Update the state
        this.setState({ image: event.target.files[0] });

    };

    onFileUpload = () => {

        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append(
            "myFile",
            this.state.image,
            this.state.image.name
        );

        // Details of the uploaded file
        console.log(this.state.image);

        axios.post("api/uploadfile", formData)

    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Address:
            <input type="text" value={this.state.address} onChange={this.handleChange} />
                </label>
                <label>
                    Geolocation:
            <input type="text" value={this.state.geolocation} onChange={this.handleChange} />
                </label>
                <label>
                    Cost /hr:
            <input type="text" value={this.state.cost} onChange={this.handleChange} />
                </label>
                <label>
                    File Name:
            <input type="file" value={this.state.image.name} onChange={this.onFileChange} />
                </label>

                <br />

                <input style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                }}
                    type="submit" className="btn btn-large waves-effect waves-light hoverable blue accent-3" value="Submit" />
            </form>
        );
    }
}

export default Form;