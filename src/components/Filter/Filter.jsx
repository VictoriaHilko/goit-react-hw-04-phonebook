import css from './Filter.module.css';

export const Filter = ({filter, onFilter}) => {
    return (

        <div className={css.filterContainer}>
        <p className={css.filterField}>Find contact by name</p>
        <input className={css.filterInput}
        type="text"
                name="filter"
                value={filter}
                onChange={onFilter}/>
        </div>
    );
};