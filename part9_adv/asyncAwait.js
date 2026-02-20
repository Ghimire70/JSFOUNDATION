function fetchUserdata() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove({ name: "mycode", url: "https://figma.com" });
    }, 3000);
  });
}

//fetchUserData.then().catch()
//always use await when you have async over the function
async function getUserData() {
  try {
    console.log("Fetching user data...");
    const userData = await fetchUserdata();
    console.log("User data fetched succesfully");

    console.log("User data:", userData);
  } catch (error) {
    console.log("Error fetching data", error);
  }
}
getUserData();
