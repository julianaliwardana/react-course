import React, { useState } from 'react';
import './FormPage.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

function FormPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
        <div className='form-container'>
            <span className='close-btn'>×</span>
            {!isSubmitted ? (
            <FormSignup submitForm={submitForm} />
            ) : (
            <FormSuccess />
            )}
        </div>
        </>
    );
};

export default FormPage;