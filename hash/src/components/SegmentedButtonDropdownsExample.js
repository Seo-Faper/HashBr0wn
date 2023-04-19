import React, { useState } from "react"
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SplitButton from 'react-bootstrap/SplitButton';


function SegmentedButtonDropdownsExample() {
    const handleOnKeyPress = e => {
        if (e.key === 'Enter') {
            onAddDetailDiv();
        }
    };
    const md5 = require("blueimp-md5");
    const [hashText, sethashText] = useState('');
    const [plainText, setplainText] = useState('');
    const onChange = (e) => {
        setplainText(e.target.value);
    }
    const onAddDetailDiv = () => {
        let e = md5(plainText);
        setplainText('');
        sethashText(e);
    }
    return (
        <>
            <InputGroup className="mb-3" >
                <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
                <Form.Control aria-label="Text input with dropdown button" value={plainText} onChange={onChange} onKeyPress={handleOnKeyPress}
                />
                <SplitButton
                    onClick={onAddDetailDiv}
                    variant="success"
                    title="Hash"
                    id="segmented-button-dropdown-3"
                    alignRight
                >
                    <Dropdown.Item href="#">md5</Dropdown.Item>
                    <Dropdown.Item href="#">sha-1</Dropdown.Item>
                    <Dropdown.Item href="#">sha-256</Dropdown.Item>
                </SplitButton>
            </InputGroup>
            <hr></hr>
            <div>
                <div className="result">
                    <p>{hashText}<span>▊</span></p>
                </div>

            </div>
        </>
    );
}

export default SegmentedButtonDropdownsExample;