#TLDR_SIH

TLDR_SIH is a news summarization app developed for the SIH hackathon. It takes Public Information Bureau (PIB) articles, passes them through an MT5 model, and summarizes the articles into 60 words, which are then displayed on the web app.

##Project Architecture
The project is structured as follows:
```
TLDR_SIH
|
|- Frontend     // This contains the React application for the frontend
|
|- Backend      // This contains the Django web app for the backend with a RESTful API for middleware connection 
```

The backend component of the project retrieves articles from the PIB website using Selenium, preprocesses them for the MT5 model, and passes the results through a Django REST API to the frontend for display.

