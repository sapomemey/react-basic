import React, { Fragment, useState, useEffect } from 'react';
import { Message } from './message';

export const MediumForm = () => {
  const [form, setForm] = useState({ name: '', lastName: '' });
  const { name, lastName } = form;

  useEffect(() => {
    console.log('lastName', lastName);
  }, [lastName]);

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setForm({
      ...form,
      [name]: value
    });
  };

  return <Fragment>

    <input
      type="text"
      name="name"
      value={name}
      onChange={handleChange}
      autoComplete='off'
    ></input>
    <br></br>
    <input
      type="text"
      name="lastName"
      value={lastName}
      onChange={handleChange}
      autoComplete='off'>
    </input>

    { name === '123' && <Message></Message> }

  </Fragment>
};
