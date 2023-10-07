import { nanoid } from 'nanoid';
import { Component } from 'react';
import css from './ContactForm.module.css';

export class ContactForm extends Component {

    state = {
        name: '',
        number: ''
    };

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit({ ...this.state });

        this.setState({
            name: '',
            number: ''
        });
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value,
            id: nanoid()
        });
    };

    render() {
        const { name, number } = this.state;
        return (
            <form onSubmit={this.handleSubmit} className={css.form}>
                <label className={css.formTitle}>Name: </label>
                <input className={css.formInput}
                    type="text"
                    name="name"
                    value={name}
                    required
                    onChange={this.handleChange} />
                <label className={css.formTitle}>Number: </label>
                <input className={css.formInput}
                    type="tel"
                    name="number"
                    value={number}
                    required
                    onChange={this.handleChange} />
                <button className={css.saveButton}>Save contact</button>
            </form>
        );
    };
}