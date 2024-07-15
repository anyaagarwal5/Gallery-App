# **Gallery App**
A web application built with React, Redux, Express, and MongoDB for managing images and categories.

---

## Features
-Home Page: Displays all images categorized by user-defined categories.
-Add Image: Upload images to specific categories.
-Add Category: Create new categories for organizing images.
-View Single Image: View images filtered by selected category

## Technologies Used
-Frontend: React, Redux, React Router, Axios
-Backend: Node.js, Express.js, MongoDB, Mongoose
-Styling: CSS, Bootstrap
-Other Tools: Redux Toolkit, FormData for image uploads
## Model Building 

### Abstractive Approach 

- Selected t5-small model for abstractive summarization.
- Prefine tuning results stored at `Summarization_Model/model.ipynb` .
- Fine tuned it on my dataset , evaluated results at `abstractive_mdel_t5_model_ipynb.ipynb)


### Extractive Approach
- Performed Extractive Summarization pre-processing on the dataset by removing stopwords, punctuation, and special characters and white spaces.
- Selected Text Rank Algorithm for extractive summarization .
- Implemented through py summa library.

- Rouge scores for extractive summarization are as follows: (for 20% ratio of input text vs summary length)
   ` Rouge-1: 0.25 `
   ` Rouge-2: 0.12 `
   ` Rouge-L: 0.19 `

- Optimized ratio Length of summary to input text to get better results.

## Model Interface 

- Built Model Interface using streamlit library.
- Implemented in `Model_Interface/app.py`.
- Visualized Abstract and Extractive Summarization results on the interface.
