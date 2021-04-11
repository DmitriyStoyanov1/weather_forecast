import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateForm, fetchWeather } from '../../store/actions';

export const Form = () => {

  const dispatch = useDispatch();
  const formValue = useSelector((state) => state.form.value);

  const handleFormUpdate = (event) => {
    dispatch(updateForm(event.target.value))
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    dispatch(fetchWeather(formValue));
  }

  return (
    <div className="header" >

      <form className="form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={formValue}
          onChange={handleFormUpdate}
          placeholder="Enter the city"
        />

        <button type="submit">CHECK WEATHER</button>
      </form>
    </div>
  );
}
