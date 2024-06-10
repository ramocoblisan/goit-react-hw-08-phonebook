import React from 'react';
import styles from './FilterContacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectStatusFilter } from '../../redux/contacts/selectors';
import { setStatusFilter } from '../../redux/contacts/filterSlice';


function FilterContacts() {

  const filter = useSelector(selectStatusFilter);
  const dispatch = useDispatch();
  const handleAddFilter = (ev) => {
      dispatch(setStatusFilter(ev.target.value))
      };

      return(
        <div className={styles.containerFilter}>
          <h3 className={styles.titleFilter}>Contacts</h3>
          <h3 className={styles.titleContact}>Find contacts by name</h3>
          <input
            className={styles.filterInput}
            type = "text"
            name = "filter"
            value={filter}
            placeholder="Contacts"
            onChange={handleAddFilter}
            required
          />
        </div>
      )
}

export default FilterContacts;