import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { notiflix } from 'components/FormContact/FormContact';

import Notiflix from 'notiflix';
import 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchAll = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts/');

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts/', { name, number });
      Notiflix.Notify.info(`Contact ${name} added`, notiflix);
      return response.data;
    } catch (e) {
      Notiflix.Notify.failure(
        `Something went wrong, try again later`,
        notiflix
      );

      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);

      Notiflix.Notify.info(`Contact ${data.name} deleted`, notiflix);
      return data;
    } catch (e) {
      Notiflix.Notify.failure(
        `Something went wrong, try again later`,
        notiflix
      );
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
