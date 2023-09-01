import React from 'react';
import './Form.css';
import { useFormWithValidation } from './useFormValidation';

function Form({ setSubmitMessage, submitMessage, handleSubmit }) {

    const { values, handleChange, errors, isValid } = useFormWithValidation();

    const handleClick = (evt) => {
        evt.preventDefault();
        console.log({
            "пользовательский ввод": values,
        })
        const formData = values;
        handleSubmit(formData);
    }


    return (
        <section className='contact' id="section3">
            <h2 className='contact__title'>Contact</h2>
            <form className='contact__form' onSubmit={handleClick}>
                <input className='contact__form-input'
                    placeholder='Name'
                    name='name'
                    value={values.name}
                    minLength={2}
                    maxLength={30}
                    required
                    onChange={handleChange}
                ></input>
                <span className='contact__form-error'>{errors.name}</span>
                <input className='contact__form-input'
                    placeholder='E-mail'
                    name='email'
                    value={values.email}
                    minLength={5}
                    maxLength={40}
                    pattern="\\w[\\w\\.-]*@\\w[\\w\\.-]*\\.\\w+"
                    required
                    onChange={handleChange}
                ></input>
                <span className='contact__form-error'>{errors.email}</span>
                <input className='contact__form-input'
                    placeholder='You message'
                    name='message'
                    value={values.message}
                    minLength={2}
                    maxLength={300}
                    required
                    onChange={handleChange}
                ></input>
                <span className='contact__form-error'>{errors.message}</span>
                <button className={isValid
                    ?
                    'contact__button'
                    :
                    "contact__button contact__button-disabled"}
                    type='submit'
                    disabled={!isValid}>Сontact me</button>
                <span className='contact__form-submit'>{submitMessage}</span>
            </form>
        </section>
    )
}

export default Form;