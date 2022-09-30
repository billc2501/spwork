import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBm9CGwkd8crn9JX8jz9dBnQNjbZLkJB60',
  authDomain: 'spstuff.firebaseapp.com',
  databaseURL: 'https://your-database-name.firebaseio.com',
  projectId: 'spstuff',
  storageBucket: 'spstuff.appspot.com',
  messagingSenderId: 'project-1068882050755',
  appId: 'project-1068882050755',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };