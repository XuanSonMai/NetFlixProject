import { initializeApp } from 'firebase/app';
import { getStorage, ref } from 'firebase/storage';
const firebaseConfig = {
    apiKey: 'AIzaSyD9P_C81FF5l5DyVIo8vhfYyHFE_mZ64os',
    authDomain: 'netflix-3471c.firebaseapp.com',
    projectId: 'netflix-3471c',
    storageBucket: 'netflix-3471c.appspot.com',
    messagingSenderId: '44116912969',
    appId: '1:44116912969:web:6ebb6e4a9ee13da4940898',
    measurementId: 'G-97BVT1F75S',
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
// Create a storage reference from our storage service
export const storageRef = ref(storage);
export default storage;
