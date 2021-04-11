import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { updateForm, fetchWeather } from '../../store/actions';

const styles = {
  header: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "30px",
    paddingBottom: "30px",
    position: "relative"
  },
  width: {
    width: "170px"
  },
  searchError: {
    color: "red",
    position: "absolute",
    top: "78%",
    left: "30%",
    fontSize: "22px"
  }
}

export const Form = () => {
  const { header, width, searchError } = styles;

  const dispatch = useDispatch();
  const formValue = useSelector((state) => state.form.value);

  const handleFormUpdate = (event) => {
    dispatch(updateForm(event.target.value))
  }

  const handleFormSubmit = (event) => {
    // Preventing page refresh on submit
    event.preventDefault();

    dispatch(fetchWeather(formValue));
  }

  return (
    <div style={header}>
      {/* {error && (<i style={searchError}>unknown city, let's try again!</i>)} */}

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
