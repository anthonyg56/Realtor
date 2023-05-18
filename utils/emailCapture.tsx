"use client"
import React, { FormEvent, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  
  const btnRef = useRef<any>();

  const saveInput = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    e.preventDefault();
    const value = e.currentTarget.value;
    setEmail(value);
  };

  {/* Things to do:
    *
    * Validate that a real email address is submitted?
    *
    */}
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!email) return 

    btnRef.current.setAttribute("disabled", "disabled");

    // Run an API Request const { data, status } = await submitEmail(email);
  }

  return (
    <React.Fragment>
      <div>
        <div>
          <div></div> {/* background image */}
        </div>
        <div>
          <div>
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <div>
            <div>
              <p>Hot</p>
              <p>&</p>
              <p>New</p>
            </div>
            <div>
              <h3>New Listings</h3>
            </div>
            <div>
              <h4>Subscribe to out list and be updated on what's hot & new</h4>
            </div>
            <div>
              <form onSubmit={e => handleSubmit(e)}>
                <div>
                  <input
                    onChange={e => saveInput(e)}
                    value={email}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email"
                    required
                  /> 
                </div>
                <div>
                  <button type="submit" ref={btnRef}>Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
