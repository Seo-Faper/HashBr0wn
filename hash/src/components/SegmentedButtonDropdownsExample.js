import React, { useState } from "react"
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SplitButton from 'react-bootstrap/SplitButton';
import SHA256 from 'sha256-es';
import { RiFileCopyLine } from "react-icons/ri";
function SegmentedButtonDropdownsExample() {
    const handleCopyClipBoard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
        } catch (error) {
        }
    };
    const handleOnKeyPress = e => {
        if (e.key === 'Enter') {
            onAddDetailDiv();
        }
    };
    const md5 = require("blueimp-md5");
    var sha1 = require('sha1');
    const [hashText, sethashText] = useState('');
    const [hashType, sethashType] = useState('#');
    const [plainText, setplainText] = useState('');
    const onChange = (e) => {
        setplainText(e.target.value);
    }
    const onAddDetailDiv = () => {
        let e = '';
        if (plainText !== '')
            if (hashType === 'md5' || hashType === '#')
                e = md5(plainText);
            else if (hashType === 'sha-1') {
                e = sha1(plainText);
            } else if (hashType === 'sha-256') {
                e = SHA256.hash(plainText);
            }
        setplainText('');
        sethashText(e);
    }
    const onChangeType = (params, e) => {
        sethashType(params);
        e.preventDefault();
    }
    return (
        <>
            <InputGroup className="mb-3" >
                <InputGroup.Text id="basic-addon1">{hashType}</InputGroup.Text>
                <Form.Control aria-label="Text input with dropdown button" value={plainText} onChange={onChange} onKeyPress={handleOnKeyPress}
                />
                <SplitButton
                    onClick={onAddDetailDiv}
                    variant="success"
                    title="Hash"
                    id="segmented-button-dropdown-3"
                    alignRight
                >
                    <Dropdown.Item onClick={(e) => { onChangeType("md5", e) }}>md5</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => { onChangeType("sha-1", e) }} >sha-1</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => { onChangeType("sha-256", e) }} >sha-256</Dropdown.Item>
                </SplitButton>
            </InputGroup>

            <div>

                <div className="result">
                    <p> <RiFileCopyLine cursor={"pointer"} onClick={() => handleCopyClipBoard(hashText)} />  {hashText}<span>▊</span> </p>

                </div>

            </div >
        </>
    );
}

export default SegmentedButtonDropdownsExample;