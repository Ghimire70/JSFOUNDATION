// Task 1: Simulating Asynchronous Behavior
// Create a function simulateAsyncTask() that logs “Task started”, then after 2 seconds logs “Task finished”.
// Use setTimeout to simulate this behaviour.

// Task 2: Simulate Multiple Async Tasks with Different Delays
// Create a function simulateMultipleTasks() that starts three asynchronous tasks with different delays (1 second, 2 seconds, and 3 seconds).
// Each task should log "Task [n] finished" where [n] is the task number. Ensure the tasks run asynchronously.

// Task 3: Async Task with Callback Function
// Create a function fetchDataWithCallback(callback) that simulates fetching data asynchronously using setTimeout (after 2 seconds).
// Once the data is “fetched”, it should invoke the provided callback function with "Fetched data" as an argument.

//------starts here-------//

//task1
// function simulateAsyncTask() {
//   console.log("Task started"); // runs immediately
//   setTimeout(() => {
//     console.log("Task finished"); // runs after 2 seconds
//   }, 2000);
// }
// simulateAsyncTask();

//task2

// function simulateMultipleTasks() {
//   console.log("All tasks started");

//   setTimeout(() => {
//     console.log("process 1 completed");
//   }, 1000);

//   setTimeout(() => {
//     console.log("process 2 completed");
//   }, 2000);

//   setTimeout(() => {
//     console.log("process 3 completed");
//   }, 3000);
// }
// simulateMultipleTasks();

//task 3

function fetchDataWithCallback(callback) {
  console.log("fetching data...");
  setTimeout(() => {
    const data = "Fetched Data";
    callback(data);
  }, 2000);
}

fetchDataWithCallback((data) => {
  console.log("Received:", data);
});
