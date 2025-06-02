function readMore(topic) {
    let message;
    if (topic === 'jwt') {
      message = "In my JWT project, I also implemented secure cookie storage and improved error handling for invalid tokens.";
    } else if (topic === 'react') {
      message = "I also used Context API and React Router to handle state and routing efficiently.";
    } else {
      message = "More details coming soon!";
    }
    alert(message);
  }
  