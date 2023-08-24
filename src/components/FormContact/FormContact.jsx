import { Formik } from 'formik';
import Notiflix from 'notiflix';
import 'notiflix';

import * as Yup from 'yup';
import {
  Container,
  Input,
  Label,
  BtnAdd,
  Error,
  FormCont,
} from './FormContact.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selector';
import { addContact } from 'redux/operations';

export const notiflix = {
  position: 'center-top',
  messageMaxLength: 180,
  width: '360px',
  fontSize: '20px',
  cssAnimationStyle: 'zoom',
};
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
      message:
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
      excludeEmptyString: true,
    })
    .required('Name is required'),
  number: Yup.string()
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      {
        message:
          'number number must be digits and can contain spaces, dashes, parentheses and can start with +',
        excludeEmptyString: true,
      }
    )
    .required('number number is required'),
});

export const FormContact = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = async (values, { resetForm }) => {
    const { name, number } = values;
    const isAlreadyInContacts = contacts.some(
      contact =>
        contact.name.toLowerCase().trim() === name.toLowerCase().trim() ||
        contact.number === number
    );
    if (isAlreadyInContacts) {
      Notiflix.Notify.info(`${name} is already in contacts`, notiflix);

      return;
    }
    dispatch(addContact({ name, number }));
    resetForm();
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ dirty, isValid }) => (
          <FormCont>
            <Label>
              Name
              <Input type="text" name="name" placeholder="Enter name" />
              <Error name="name" component="div" className="error" />
            </Label>
            <Label>
              number number
              <Input
                type="tel"
                name="number"
                placeholder="Enter number number"
              />
              <Error name="number" component="div" className="error" />
            </Label>
            <BtnAdd type="submit" disabled={!isValid || !dirty}>
              Add contact
            </BtnAdd>
          </FormCont>
        )}
      </Formik>
    </Container>
  );
};
