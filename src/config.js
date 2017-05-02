/**
 * Created by BHarris on 5/2/17.
 */
const ENV = {
    apiHost: 'http://localhost:8080'
};

if (process.env.NODE_ENV === 'production') {
    ENV.apiHost = 'https://myapp.herokuapp.com';
}

export default ENV;