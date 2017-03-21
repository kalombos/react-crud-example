
# React Redux CRUD App

Here is the sample of CRUD app for tree structure. It uses **Python3/Django** for 
backend and **React+Redux** for frontend. [Live Demo] (https://infinite-river-67461.herokuapp.com/)


# Local Installation and runnig for development

## Setup backend
1. **pip install -r requirements.txt**
2. **python manage.py migrate**
3. **python manage.py runserver**
4. Go to http://localhost:8000/docs/, here is a description for our rest api in swagger format 


## Setup frontend

1. **cd frontend**
2. **npm update**
3. update **API** variable to **'http://localhost:8000/api'** in **frontned/src/config.js**
3. **npm start**
4. Go to localhost:3000


# Run for production (Not a best solution for the moment)

1. update **API** variable to **'/api'** in **frontned/src/config.js**
2. **npm run build**
3. fix static paths in backend/templates/index.html
4. python manage.py collectstatic
5. push to heroku