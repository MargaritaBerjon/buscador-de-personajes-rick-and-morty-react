import React from 'react'
import '../styles/Form.scss';


function Form(props) {
  return (
    <form className='form' onSubmit={props.onSubmit}>
      <input className='fom-input-text' type='search' onChange={props.onNameChange} placeholder={props.placeholderSearch}
      >
      </input>
    </form >
  );
}

export default Form;