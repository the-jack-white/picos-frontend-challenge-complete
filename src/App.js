import "./App.css";

import React, { useState } from "react";
import TextArea from './components/TextArea';
import TextField from "./components/TextField";
import Dropdown from "./components/Dropdown";
import Button from "./components/Button";

function App() {

    const [title, setTitle] = useState('')
    const [summery, setSummery] = useState('')
    const [network, setNetwork] = useState('')

    const [isClearable, setisClearable] = useState(true)
    const [disabled, setDisabled] = useState(false)

    // Network Options can dynamically be obtained via API
    // Hardcoded for testing purposes
    const networkOptions = [
        {
            value: 1,
            label: 'Radio 1'
        },
        {
            value: 2,
            label: 'Radio 2'
        },
        {
            value: 3,
            label: 'Radio 1Xtra'
        },
        {
            value: 4,
            label: 'Radio 3'
        },
        {
            value: 5,
            label: 'Radio 4'
        },
        {
            value: 6,
            label: 'Radio 5 Live'
        },
        {
            value: 7,
            label: 'Radio 6Music'
        }
    ];

    const handleChange = (e, val) => {
        let { name } = e.target
        if ( name === 'title' ) {
            setTitle(val);
        } else if ( name === 'summery' ) {
            setSummery(val);
        } else if ( name === 'network-dropdown' ) {
            setisClearable(false)
            setNetwork(val);
        }
    }

    const handleSubmitForm = () => {
        console.log('Submitting Form...')
        if ( validateForm('Title' ,title) && validateForm('Summery' ,summery) && validateForm('Network' ,network) ) {
            console.log('Validation Successful, Proceed to submit data')
            setDisabled(true)

            const payload = {
                title,
                summery,
                network
            }
            console.log('Payload: ', payload)
        }
    }

    const validateForm = (name, val) => {
        if ( val === "" ) {
            alert(`${name} Field is Empty`)
        } else {
            return true
        }
    }

    return <div className = "App">
        <TextField
            label="Proposal Title"
            name="title"
            value={title}
            placeholder="Please Enter A Proposal Title"
            onChange={ handleChange }
            disabled={disabled}
        />
        <TextArea
            label="Proposal Summery"
            name='summery'
            rows={4}
            value={summery}
            placeholder="Please Enter A Proposal Summery"
            onChange={ handleChange }
            disabled={disabled}
        />
        <Dropdown
            label="Network Options"
            options={ networkOptions }
            name="network-dropdown"
            value={network}
            placeholder="Please Enter A Network"
            onChange={ handleChange }
            isClearable={ isClearable }
            disabled={disabled}
        />
        <Button 
            id="btn-submit"
            value="Submit"
            onClick={ handleSubmitForm }
        />
    </div>;
}

export default App;