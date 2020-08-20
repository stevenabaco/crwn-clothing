import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users')
  .doc('5dO9lftbcKOrtMuCaukp')
  .collection('cartItems')
  .doc('MVEcPX6M6TEeSrsbTdKu')

firestore.doc('/users/5dO9lftbcKOrtMuCaukp/cartItems/MVEcPX6M6TEeSrsbTdKu')
firestore.collection('/users/5dO9lftbcKOrtMuCaukp/cartItems')