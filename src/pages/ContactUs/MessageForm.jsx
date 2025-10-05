import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { supabase } from "../../supabase.js";
import Swal from "sweetalert2";

const MessageForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [message, setMessage] = useState("");
  const [contactMessage, setContactMessage] = useState([]);

  const addMessage = async (e) => {
    e.preventDefault();
    const newMessageData = {full_name: name, email, contact_num: contactNum, message};

    const {data, error} = await supabase
      .from("messages")
      .insert([newMessageData])
      .select()
      .single();

    if (error) {
      Swal.fire({ title: "Error", text: error.message, icon: "error" });
    } else if (data) {
      Swal.fire({
        title: "Message Sent!",
        text: "Your message was sent to the dentist and will be taken care of accordingly.",
        icon: "success",
      });

      setContactMessage((prev) => [...prev, data]);
      setName("");
      setEmail("");
      setContactNum("");
      setMessage("");
    }
  };

  return (
    <StyledWrapper>
      <form className="form" >
        <h1>Send us a Message</h1>
          <label>
            <input required  
            type="text" 
            className="input" 
            value={name}
            onChange={(e) => setName(e.target.value)}/>
            <span>Name</span>
          </label>
        <label>
          <input required  
          type="email" 
          className="input" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
          <span>Email</span>
        </label> 
        <label>
          <input required 
          type="tel"  
          className="input" 
          pattern="\d{11}"
          maxLength={11}
          value={contactNum}
          onChange={(e) => setContactNum(e.target.value)}/>
          <span>Contact Number</span>
        </label>
        <label>
          <textarea required rows={10}  
          className="input01" 
          defaultValue={""} 
          value={message}
          onChange={(e) => setMessage(e.target.value)}/>
          <span>Message</span>
        </label>
        <button className="fancy" onClick={addMessage}>
          <span className="top-key" />
          <span className="text">Submit</span>
          <span className="bottom-key-1" />
          <span className="bottom-key-2" />
        </button>
      </form>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    height: 580px
  }

  .form h1{
    margin-bottom: 20px;
    text-align: center;
    align-items: center;
    font-family: 'Quicksand', sans-serif;
    font-size: 1.3rem;
  }

  .message {
    color: rgba(88, 87, 87, 0.822);
    font-size: 14px;
  }

  .form label {
    position: relative;
  }

  .form label .input {
    width: 100%;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 5px;
  }

  .form label .input + span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: grey;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }

  .form label .input:placeholder-shown + span {
    top: 15px;
    font-size: 0.9em;
  }

  .form label .input:focus + span,.form label .input:valid + span {
    top: 30px;
    font-size: 0.7em;
    font-weight: 600;
  }

  .form label .input:valid + span {
    color: green;
  }

  .input01 {
    width: 100%;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 5px;
  }

  .form label .input01 + span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: grey;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }

  .form label .input01:placeholder-shown + span {
    top: 15px;
    font-size: 0.9em;
  }

  .form label .input01:focus + span,.form label .input01:valid + span {
    top: 250px;
    font-size: 0.7em;
    font-weight: 600;
  }

  .form label .input01:valid + span {
    color: green;
  }

  .fancy {
    background-color: transparent;
    border: 2px solid #cacaca;
    border-radius: 0px;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-weight: 390;
    letter-spacing: 2px;
    margin: 0;
    outline: none;
    overflow: visible;
    padding: 8px 30px;
    position: relative;
    text-align: center;
    text-decoration: none;
    text-transform: none;
    transition: all 0.3s ease-in-out;
    user-select: none;
    font-size: 13px;
  }

  .fancy::before {
    content: " ";
    width: 1.7rem;
    height: 2px;
    background: #cacaca;
    top: 50%;
    left: 1.5em;
    position: absolute;
    transform: translateY(-50%);
    transform: translateX(230%);
    transform-origin: center;
    transition: background 0.3s linear, width 0.3s linear;
  }

  .fancy .text {
    font-size: 1.125em;
    line-height: 1.33333em;
    padding-left: 2em;
    display: block;
    text-align: left;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    color: #818181;
    transform: translateX(30%);
  }

  .fancy .top-key {
    height: 2px;
    width: 1.5625rem;
    top: -2px;
    left: 0.625rem;
    position: absolute;
    background: white;
    transition: width 0.5s ease-out, left 0.3s ease-out;
  }

  .fancy .bottom-key-1 {
    height: 2px;
    width: 1.5625rem;
    right: 1.875rem;
    bottom: -2px;
    position: absolute;
    background: white;
    transition: width 0.5s ease-out, right 0.3s ease-out;
  }

  .fancy .bottom-key-2 {
    height: 2px;
    width: 0.625rem;
    right: 0.625rem;
    bottom: -2px;
    position: absolute;
    background: white;
    transition: width 0.5s ease-out, right 0.3s ease-out;
  }

  .fancy:hover {
    color: white;
    background: #cacaca;
  }

  .fancy:hover::before {
    width: 1.5rem;
    background: white;
  }

  .fancy:hover .text {
    color: white;
    padding-left: 1.5em;
  }

  .fancy:hover .top-key {
    left: -2px;
    width: 0px;
  }

  .fancy:hover .bottom-key-1,
   .fancy:hover .bottom-key-2 {
    right: 0;
    width: 0;
  }`;

export default MessageForm;
