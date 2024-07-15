import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialValues = {
  images: [],
  categories: [],
  singleImage: null,
};

export const getAllImages = createAsyncThunk(
  "images/fetchAllImages",
  async () => {
    const res = await axios.get("http://localhost:8000/api/v1/get/images");
    return res.data;
  }
);

export const getAllCategories = createAsyncThunk(
  "images/fetchAllCategories",
  async () => {
    const res = await axios.get("http://localhost:8000/api/v1/get/categories");
    return res.data;
  }
);

export const postNewCategory = createAsyncThunk(
  "images/postNewCategory",
  async (payload) => {
    const res = await axios.post(
      "http://localhost:8000/api/v1/add/category",
      payload
    );
    return res.data;
  }
);

export const getSingleImage = createAsyncThunk(
  "images/getSingleImage",
  async (payload) => {
    const res = await axios.get(
      `http://localhost:8000/api/v1/get/singleimage?category=${payload}`
    );
    return res.data;
  }
);

export const postNewImage = createAsyncThunk(
  "images/postNewImage",
  async (formData) => {
    const res = await axios.post(
      "http://localhost:8000/api/v1/add/image",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res.data;
  }
);

const gallerySlice = createSlice({
  name: "galleryslice",
  initialState: initialValues,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllImages.fulfilled, (state, action) => {
      state.images = action.payload;
    });
    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(getSingleImage.fulfilled, (state, action) => {
      state.singleImage = action.payload;
    });
    builder.addCase(postNewImage.fulfilled, (state, action) => {
      state.NewImage = action.payload;
    });
  },
});

export default gallerySlice.reducer;

