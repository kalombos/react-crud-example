export let API;

if (process.env.NODE_ENV === 'production') {
    API = '/api';
}
else {
    API = 'http://localhost:8000/api';
}