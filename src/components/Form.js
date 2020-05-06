import React from 'react'
import '../styles/Form.scss';

function Form(props) {

  return (
    <form className='form' onSubmit={props.onSubmit}>
      <div>
        <input className='fom-input-text' type='search' onChange={props.onNameChange} placeholder={props.placeholderSearch}
          value={props.value}>
        </input>
        <input className='fom-input-text' type='search' onChange={props.onNumberChange} value={props.valueEpisodes} placeholder={props.placeholderEpisodes}>
        </input>
      </div>
      <div className="Radio">
        {
          props.items.map((item, i) =>
            <label htmlFor={item} key={i} name={props.name}><input className='form-input-radio' type='radio' id={item} name={props.name} value={item} onChange={props.onGenderChange} />{item}</label>
          )
        }
      </div>
      <button className='form-reset' type="reset" onClick={props.onReset}>
        Nueva búsqueda
      </button>
    </form >
  );
}

export default Form;