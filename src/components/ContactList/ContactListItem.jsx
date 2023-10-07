import css from './ContactListItem.module.css';

export const ContactListItem = ({ id, name, number, handleDelete}) => {

    return (
        <>
            <p><span className={css.itemName}>Name: </span>{name}</p>
            <p><span className={css.itemName}>Number: </span>{number}</p>
            <button className={css.deleteButton}
                type="button"
                onClick={() => handleDelete(id)}>
                Delete
            </button>
        </>
)};