// import { FormContact } from './component/FormContact/FormContact';
import { FormContact } from 'components/FormContact/FormContact';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';

import { MainTitle, Title } from './Phonebook.styled';
const Phonebook = () => {
  return (
    <div>
      <MainTitle>Phonebook</MainTitle>
      <FormContact />
      <Title>Contacts</Title>
      <Filter />
      <Contacts />
    </div>
  );
};
export default Phonebook;
