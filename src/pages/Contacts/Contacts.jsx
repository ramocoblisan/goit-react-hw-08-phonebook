import Section from "../../components/Section/Section";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import FilterContacts from "../../components/FilterContacts/FilterContacts";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

export default function Contacts () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts()).then(response => console.log('Fetched contacts:', response));

  }, [dispatch])

  return (
    <>
      <Section title="PhoneBook">
        <ContactForm />
        <FilterContacts />
        <ContactList />
      </Section>
    </>
  );
}