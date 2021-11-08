
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDqWlEeQNQr4rbTPBUrIx4aHdUA_E0kylw",
    authDomain: "we-chat-7a78b.firebaseapp.com",
    projectId: "we-chat-7a78b",
    storageBucket: "we-chat-7a78b.appspot.com",
    messagingSenderId: "41344667807",
    appId: "1:41344667807:web:1273436a6b71b58a2552aa"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
    user_name = localStorage.getItem("username");
    user_name = localStorage.getItem("room_name");

    
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
    
}