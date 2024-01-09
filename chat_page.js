const firebaseConfig = {
    apiKey: "AIzaSyD3uGT1rMI6VKbvJlBizrXfgYVJVchF6b0",
    authDomain: "chat-64ae6.firebaseapp.com",
    databaseURL: "https://chat-64ae6-default-rtdb.firebaseio.com",
    projectId: "chat-64ae6",
    storageBucket: "chat-64ae6.appspot.com",
    messagingSenderId: "657582083770",
    appId: "1:657582083770:web:8f7f235d43c5f70be4fc83"
  };

  firebase.initializeApp(firebaseConfig);

  function logout(){
    localStorage.removeItem("user_name");
    window.location = "chat_room.html"
  }