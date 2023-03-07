import React from 'react';
import { Formik, Form } from 'formik';
import shortid from 'shortid';
import { Btn, Input, ErrorM, Label } from './ContactForm.styled';
import * as Yup from 'yup';
import { BsFillPersonPlusFill } from 'react-icons/bs';

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(10, 'Too Long!').required(),
  number: Yup.string().min(10, 'Too Short!').max(17, 'Too Long!').required(),
});
const initialValues = {
  name: '',
  number: '',
};
export const ContactForm = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={(values, { resetForm }) => {
        onAddContact({ ...values, id: shortid.generate() });

        resetForm();
      }}
    >
      <Form>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorM name="name" component={'span'} />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorM name="number" component={'span'} />
        </Label>
        <Btn type="submit">
          <BsFillPersonPlusFill />
        </Btn>
      </Form>
    </Formik>
  );
};
