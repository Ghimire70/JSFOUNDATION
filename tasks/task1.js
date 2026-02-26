// Task 1: Simulating Asynchronous Behavior
// Create a function simulateAsyncTask() that logs “Task started”, then after 2 seconds logs “Task finished”.
// Use setTimeout to simulate this behaviour.

function simulateAsyncTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Utsav", my_website: "/https://utsavdada.com" });
    }, 2000);
  });
}

async function fetchUserData() {
  try {
    console.log("Fetching your data...(2 seconds)");
    const yourData = await simulateAsyncTask();
    console.log("sucessfully fetched your data in the system!");

    console.log("Your data:", yourData);
  } catch (error) {
    console.log("Error fetching your data", error);
  }
}
fetchUserData();
