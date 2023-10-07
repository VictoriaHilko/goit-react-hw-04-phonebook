import css from './ContactList.module.css';
import { ContactListItem } from './ContactListItem';

export const ContactList = ({ contacts, handleDelete }) => {
    return (
        <ul className={css.list}>
            {contacts.map(({ id, name, number }) => (
                <li key={id}
                    className={css.listItem}>
                    <ContactListItem
                        id={id}
                        name={name}
                        number={number}
                        handleDelete={handleDelete}
                    ></ContactListItem>
                </li>
            ))
            }
        </ul>
    );
};