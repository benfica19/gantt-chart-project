// import {createNewFile} from "./components/ganttChart/APIcalls/databaseconnection.js";

// document.getElementById('createfilebutton').addEventListener('click', handleSubmit);

// // export async function handleSubmit(event){
// //     event.preventDefault();
// //     console.log("Create File")
// //     // Show the spinner
// //     const spinner = document.getElementById("loadingSpinner");
// //     spinner.classList.remove("d-none");
  
// //     // Collect form data
// //     const fileName = document.getElementById("fileName").value;
// //     const fileDescription = document.getElementById("fileDescription").value;
    
// //     try {
// //       console.log("Submitting form...create file...");
// //       // Call your custom script or API here
// //       await createNewFile(fileName, fileDescription);
  
// //       // Hide the spinner and close the modal
// //       spinner.classList.add("d-none");
// //       const modal = bootstrap.Modal.getInstance(document.getElementById("exampleModal"));
// //       modal.hide();
  
// //       // Optionally reset the form
// //       event.target.reset();
// //       alert("File created successfully!");
// //     } catch (error) {
// //       // Handle errors
// //       console.error("Error creating file:", error);
// //       spinner.classList.add("d-none");
// //       alert("An error occurred. Please try again.");
// //     }
// // }

// async function handleSubmit(event){
//     event.preventDefault();
//     console.log("Create File")
//     // Show the spinner
//     const spinner = document.getElementById("loadingSpinner");
//     spinner.classList.remove("d-none");
  
//     // // Collect form data
//     const fileName = document.getElementById("fileName").value;
//     const fileDescription = document.getElementById("fileDescription").value;
    
//     console.log(fileName)
//     console.log(fileDescription)

//     try {
//       console.log("Submitting form...create file...");
//        await createNewFile(fileName, fileDescription);
  
//       // Hide the spinner and close the modal
//       spinner.classList.add("d-none");
//       const modal = bootstrap.Modal.getInstance(document.getElementById("exampleModal"));
//       modal.hide();

  
//       // Optionally reset the form
//     //   event.target.reset();
//     //   alert("File created successfully!");
//     } catch (error) {
//       // Handle errors
//       console.error("Error creating file:", error);
//     //   spinner.classList.add("d-none");
//       alert("An error occurred. Please try again.");
//     }

// }
