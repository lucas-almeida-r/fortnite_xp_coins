import * as firebase from 'firebase';
import 'firebase/storage';

import firebaseConfig from './firebaseConfig';

// Initialize Firebase App

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export const storage = firebase.storage();
