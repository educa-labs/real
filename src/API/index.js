import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAjtsL_IYJsZuLbgPxiIcQda_uAoaWvCvE',
  authDomain: 'real-7a78c.firebaseapp.com',
  databaseURL: 'https://real-7a78c.firebaseio.com',
  projectId: 'real-7a78c',
  storageBucket: 'real-7a78c.appspot.com',
  messagingSenderId: '148709888943',
};

firebase.initializeApp(config);

const db = firebase.firestore();

db.settings({
  timestampsInSnapshots: true,
});

const API = {
  async designers() {
    const designers = [];

    const querySnapshot = await db.collection('designers').get();
    querySnapshot.forEach(document => {
      designers.push(document.data());
    });

    return designers;
  },

  async projects(id) {
    if (id) {
      const document = await db.collection('project').doc(id).get();

      return { id: document.id, ...document.data(), };
    }

    const projects = [];

    const querySnapshot = await db.collection('project').get();
    querySnapshot.forEach(document => {
      projects.push({ id: document.id, ...document.data(), });
    });

    return projects;
  },
};

export default API;
