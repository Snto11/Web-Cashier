// firebase-config.js
const firebaseConfig = {
    apiKey: "AIzaSyAZp-DGYQy8msMw-snRvYVmFaV4qXffv8A",
    authDomain: "web-cashier-e04be.firebaseapp.com",
    projectId: "web-cashier-e04be",
    storageBucket: "web-cashier-e04be.firebasestorage.app",
    messagingSenderId: "482680939397",
    appId: "1:482680939397:web:7fa3d9c8cdaa0d99ce5aec",
    measurementId: "G-WT0KF9NYMK"
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();