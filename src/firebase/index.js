//
// It provides a shortcut to access firebase.storage()
// and it initializes firebase, if it wasn't yet.
// 

import * as firebase from 'firebase';
import 'firebase/storage';

import firebaseConfig from './firebaseConfig';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export const storage = firebase.storage();
