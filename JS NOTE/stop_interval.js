// Start the recurring task
const intervalId = setInterval(() => {
  // Code to be executed repeatedly
  console.log("Recurring task");
}, 1000);

// Stop the recurring task after 5 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Recurring task stopped");
}, 5000);
