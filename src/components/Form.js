import React from 'react'
import '../styles/Form.scss';

function Form(props) {

  return (
    <form className='form' onSubmit={props.onSubmit}>
      <input className='fom-input-text' type='search' onChange={props.onNameChange} placeholder={props.placeholderSearch}
        value={props.value}>
      </input>
      <div className="Radio">
        {
          props.list.map((elem, i) =>
            <label htmlFor={elem} key={i} name={props.name}><input type='radio' id={elem} name={props.name} value={elem} onChange={props.onGenderChange} />{elem}</label>
          )
        }
      </div>
      <button className='form-reset' type="reset" onClick={props.onReset}>
        Borrar busqueda
      </button>
    </form >
  );
}

export default Form;