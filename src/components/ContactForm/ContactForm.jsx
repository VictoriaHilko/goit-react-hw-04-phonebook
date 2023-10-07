// import { nanoid } from 'nanoid';
import { useState } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

export const ContactForm = ({ onSubmit }) => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const reset = () => {
        setName('');
        setNumber('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            name,
            number,
            id: nanoid()
        }

        onSubmit(data);

        reset();
    };

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;

            default:
                break;
        }
    };

    return (
        <form onSubmit={handleSubmit} className={css.form}>
            <label className={css.formTitle}>Name: </label>
            <input className={css.formInput}
                type="text"
                name="name"
                value={name}
                required
                onChange={handleChange} />
            <label className={css.formTitle}>Number: </label>
            <input className={css.formInput}
                type="tel"
                name="number"
                value={number}
                required
                onChange={handleChange} />
            <button className={css.saveButton}>Save contact</button>
        </form>
    );
};