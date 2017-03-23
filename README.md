
# React Redux CRUD App

Here is the sample of CRUD app for tree structure. It uses **Python3/Django** for 
backend and **React+Redux** for frontend. [Live demo is here](https://infinite-river-67461.herokuapp.com/)


# Local Installation and runnig for development

## Setup backend
1. **pip install -r requirements.txt**
2. **python manage.py migrate**
3. **python manage.py runserver**


## Setup frontend

1. **cd frontend**
2. **npm update**
3. **npm start**
4. Go to localhost:3000


# Run for production (Not a best solution for the moment)

1. **npm run build**
2. fix static paths in backend/templates/index.html
3. push to heroku