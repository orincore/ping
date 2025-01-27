const serverUrl = 'https://meowexam.onrender.com'; // Replace with your server URL
const interval = 5 * 60 * 1000; // Ping every 5 minutes (in milliseconds)

const pingServer = async () => {
  try {
    const response = await fetch(serverUrl);
    if (response.ok) {
      console.log(`Server pinged successfully at ${new Date().toLocaleTimeString()}`);
    } else {
      console.error(`Server responded with status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error pinging server:', error);
  }
};

// Start the ping loop
setInterval(pingServer, interval);
