import Firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
	apiKey: 'AIzaSyC56CuPrC1D0X5HYC1944W6VzgeTeQE1WM',
	authDomain: 'netflix-6726c.firebaseapp.com',
	projectId: 'netflix-6726c',
	storageBucket: 'netflix-6726c.appspot.com',
	messagingSenderId: '738793802993',
	appId: '1:738793802993:web:965decc891054c08142d50',
	measurementId: 'G-T6KT55FTXQ',
};
const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase);

export { firebase };
