// firebaseSDK.ts
import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyCGIv-uUzmnvO9QTl0pHAdbl1gtAzpRfHY",
  authDomain: "test-not-sdk.firebaseapp.com",
  projectId: "test-not-sdk",
  storageBucket: "test-not-sdk.firebasestorage.app",
  messagingSenderId: "778559222744",
  appId: "1:778559222744:web:1fc49e23f5fc897bf8f8ad",
  measurementId: "G-X4X4GVGEXX",
  databaseURL:'https://test-not-sdk-default-rtdb.firebaseio.com'
};

export async function initializeFirebase() {
  try {
    console.log('🔍 Checking Firebase apps:', firebase.apps.length);
    if (!firebase.apps.length) {
      console.log('🔧 Initializing Firebase with config:', firebaseConfig);
      await firebase.initializeApp(firebaseConfig);
      console.log('✅ Firebase App initialized');
    } else {
      console.log('✅ Firebase App already initialized');
    }

    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('✅ Firebase Messaging permission granted.');
    } else {
      console.log('⚠️ Notification permission not granted.');
    }
  } catch (error) {
    console.error('❌ Firebase initialization failed:', error);
    throw error;
  }
}

export async function getFcmToken() {
  try {
    console.log('🔍 Checking if Firebase is initialized:', firebase.apps.length);
    if (!firebase.apps.length) {
      throw new Error('Firebase not initialized. Call initializeFirebase() first.');
    }

    const token = await messaging().getToken();
    console.log('📱 FCM Token:', token);
    return token;
  } catch (error) {
    console.error('❌ Failed to get FCM token:', error);
    throw error;
  }
}

export default {
  initializeFirebase,
  getFcmToken,
};