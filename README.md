# Treehouse FSJS Techdegree Unit 6 Project

Learn more about the developer on [LinkedIn](https://www.linkedin.com/in/desiree-morimoto-9470481b0/)

## Table of Contents
- [Project Description](#overview)
- [Technologies Used](#technologiesused)
- [Required Features](#requiredfeatures)
- [Additional Features](#extrafeatures)

## Project Information

#### <a name="overview"></a>Description
This project involved creating a single-page React app that fetches data from the Flickr API in response to user searches.

#### <a name="technologiesused"></a>Technologies Used
- CSS (project file provided by Treehouse)
- HTML (project file provided by Treehouse)
- Vite
  - This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
  - Currently, two official plugins are available:
    - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
    - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
- JavaScript / JSX
- React
- Axios

#### <a name="requiredfeatures"></a>Required Features
- App.jsx
  - Contains the function fetchData, which makes a request upon user search/query changes to [Flickr's API](https://www.flickr.com/services/api/).
  - Hold the routes for the web application
    - An index route that automatically redirects to a "cats" route
    - Three static routes that users can navigate to for "cats", "dogs", and "bears"
    - A search route that is used when a user makes a search
- Other Components
  - Photo
    - This component is used to display a photo.
  - PhotoList
    - This component acts as a container for either an array of Photo components
  - Nav
    - This component holds my three static route links
  - Search
    - This component holds my search form, where users can enter in search terms to execute the fetch request and dynamically navigate to a new /search/:query route upon form submission.
- config.js
  - Made use of the config file to store and export private API key.

#### <a name="extrafeatures"></a>Additional Features
As an added challenge, I have added some additional functionality to the app.
- Browser Navigation
  - Users are able to use the browser's built in back and forward buttons to navigate through their search history.
- 404 Error Handling
  - I've added a * route to catch user entered address that do not exist on the server, to imitate 404 errors.
- Loading Indicator
  - The PhotoList component displays a "Loading" message while results are being fetched.
- No Matches
  -  When a user enters a search term that does not generate results, a friendly message letting them know appears in the PhotoList component.
