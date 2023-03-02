"use client"

import React, { ChangeEvent, useRef, useState } from 'react'
import Styles from './styles/ContactForm.module.scss'

interface Props {
  setSubmit?: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ContactForm(props: Props) {
  const [formState, setState] = useState({
    disabledButton: false,
    name: "",
    email: "",
    description: ""
  })

  const btnRef = useRef<any>();

  const saveInput = (
    prop: "email" | "description" | "name",
    e: ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();

    let target;

    target = e.currentTarget.value;

    setState({
      ...formState,
      [prop]: target,
    });
  };

  const submitForm = async () => {
    btnRef.current.setAttribute("disabled", "disabled");

    const formData = new FormData();

    formData.append("name", formState.name);
    formData.append("description", formState.description);
    formData.append("email", formState.email);

    // Run an API Request const { data, status } = await createTribe(formData);

    /* if (status === 404) {
      alert("There was an error creating the tribe");
      return;
    } */

    props.setSubmit ? props.setSubmit(true) : null
  };

  return (
    <React.Fragment>
      <form className={Styles.form} onSubmit={(e) => {
        e.preventDefault();

        submitForm();
      }}>
        <div className={Styles.container}>
          <div className={Styles.titleContainer}>
            <h3>Send Message</h3>
          </div>
          <div className={Styles.inputDiv}>
            <div className={Styles.inputContainer}>
              <input
                type="text"
                name='name'
                id='name'
                placeholder='Name'
                value={formState.name}
                onChange={(e) => saveInput("name", e)}
                required
              />
              <input
                type="email"
                name='email'
                id='email'
                placeholder='Email'
                value={formState.email}
                onChange={(e) => saveInput("email", e)}
                required
              />
              <textarea
                placeholder="What homes were you interested in today?"
                name="description"
                id="description"
                value={formState.description}
                onChange={(e) => {
                  e.preventDefault();

                  setState({
                    ...formState,
                    description: e.currentTarget.value,
                  });
                }}
                rows={5}
              />
            </div>
          </div>
        </div>
        <div className={Styles.btnContainer}>
          <button type="submit" ref={btnRef}>Submit</button>
        </div>
      </form>
    </React.Fragment>
  )
}
