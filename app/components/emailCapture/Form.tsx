"use client"
import { captureEmail } from '@/utils/api';
import React, { FormEvent, useRef, useState } from 'react'
import Error from './error'
import Styles from "./styles/form.module.scss"

interface Props {
  setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Form(props: Props) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("")

  const btnRef = useRef<any>();
  
  const saveInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.currentTarget.value;
    setEmail(value);
  };
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>, email: string) => {
    e.preventDefault()

    if (!email) return

    btnRef.current.setAttribute("disabled", "disabled");

    const res = await captureEmail(email);

    res.status == 200 ? props.setSubmit(true) : setError("An error occured, please try again")
  }
  
  return (
    <React.Fragment>
      <form onSubmit={e => handleSubmit(e, email)} className={Styles.form}>
        <div className={Styles.input}>
          <input
            onChange={e => saveInput(e)}
            value={email}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        {error ? <Error message={error} /> : null}
        <div className={Styles.btn}>
          <button type="submit" ref={btnRef}>Subscribe</button>
        </div>
      </form>
    </React.Fragment>
  )
}
