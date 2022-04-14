import axios from 'axios';

function setAuthHeader() {
   const user = JSON.parse(localStorage.getItem('user'));
   if (user && user.authdata) {
      axios.defaults.headers.common['Authorization'] = 'Basic ' + user.authdata;
   } else {
      delete axios.defaults.headers.common['Authorization'];
   }
}

export class Requests {
   /**
    * Constructs the request object for the API call.
    * Calls the SetAuthHeader function to set the Authorization header.
    */
   constructor() {
      axios.defaults.baseURL = process.env.VUE_APP_HOST + '/api/v1';
      setAuthHeader();
   }
   
   // Fetchs (via AXIOS GET) the stations, and returns promise resolved
   // or rejected with error message.
   async getStations(){
      return new Promise((resolve, reject) => {
         axios.get('/stations')
            .then(response => {
               resolve(response.data.stations);
            })
            .catch(error => {
               reject(error);
            });
      });
   }
}

export class LoginService {
   async login(username, password) {
      const requestOptions = {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            username,
            password
         })
      };

      console.log("requestOptions", requestOptions);

      axios.post('/auth/login', requestOptions)
         // .then(this.handleResponse)
         .then(user => {
            // login successful if there's a user in the response
            console.log("user outside response", user);
            if (user) {
               console.log("user in post", user);
               // store user details and basic auth credentials in local storage 
               // to keep user logged in between page refreshes
               user.authdata = window.btoa(username + ':' + password);
               localStorage.setItem('user', JSON.stringify(user));
            }

            console.log("returning user", user);
            Promise.resolve(user);
         });         
   }

   logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('user');
   }

   handleResponse(response) {
      console.log("handleResponse", response);

      if (response.status === 401) {
         // auto logout if 401 response returned from api
         console.log("logging out");
         this.logout();
         location.reload(true);
      }
      Promise.resolve(response);

      // const error = (response && response.message) || response.statusText;
      // return Promise.reject(error);
  }
}
