import { GanttChart } from "./components/ganttChart/ganttChart.js";
import { populateDropdown } from "./components/ganttChart/APIcalls/databaseconnection.js";
import { createNewFile } from "./components/ganttChart/APIcalls/databaseconnection.js";
import { fetchChartData } from "./components/ganttChart/APIcalls/databaseconnection.js";



document.addEventListener("DOMContentLoaded", () => {
  populateDropdown()
  // const ganttCharts = document.querySelectorAll("[role=gantt-chart]");
  // // ganttCharts.textContent = "This is the Gantt Chart content!";
  // ganttCharts.forEach((gantChart) => {
  //   new GanttChart(gantChart, tasks, taskDurations);
  // });
});


function loadGanttChart(tasks, taskDurations, taskDescriptions){
    // console.log(data)
    // console.log("data-loaded")

  //   tasks = [
  //   { id: 1, name: "Task 1" },
  //   { id: 2, name: "Task 2" },
  //   { id: 3, name: "Task 3" },
  //   { id: 4, name: "Task 4" },
  //   { id: 5, name: "Task 5" },
  //   { id: 6, name: "Task 6" },
  //   { id: 7, name: "Task 7" },
  //   { id: 8, name: "Task 8" },
  // ];
  // taskDurations = [
  //   {
  //     id: "1",
  //     start: new Date("2022/1/2"),
  //     end: new Date("2022/1/8"),
  //     task: 1,
  //   },
  //   {
  //     id: "2",
  //     start: new Date("2022/1/10"),
  //     end: new Date("2022/1/15"),
  //     task: 2,
  //   },
  //   {
  //     id: "3",
  //     start: new Date("2022/1/11"),
  //     end: new Date("2022/1/18"),
  //     task: 4,
  //   },
  // ];

  // console.log(taskDurations)

  // const ganttCharts = document.querySelectorAll("[role=gantt-chart]");
  // ganttCharts.forEach((gantChart) => {
  //   new GanttChart(gantChart, tasks, taskDurations);
  // });
  const ganttChartContainer = document.querySelector("[role=gantt-chart]");
  ganttChartContainer.innerHTML = "";
  new GanttChart(ganttChartContainer, tasks, taskDurations, taskDescriptions);
}

export { loadGanttChart }

document.getElementById('createfilebutton').addEventListener('click', handleSubmit);

async function handleSubmit(event){
    event.preventDefault();
    // Show the spinner
    const spinner = document.getElementById("loadingSpinner");
    spinner.classList.remove("d-none");
    // Collect form data
    const fileName = document.getElementById("fileName").value;
    const fileDescription = document.getElementById("fileDescription").value;
    // console.log(fileName)
    // console.log(fileDescription)
    try {
      let fileautoid = await createNewFile(fileName, fileDescription);
      // Hide the spinner and close the modal
      spinner.classList.add("d-none");
      const modal = bootstrap.Modal.getInstance(document.getElementById("exampleModal"));
      modal.hide();
      populateDropdown()
      fetchChartData(fileautoid)
    //   reset the form
    //   event.target.reset();
    //   alert("File created successfully!");
    } catch (error) {
      // Handle errors
      console.error("Error creating file:", error);
    //   spinner.classList.add("d-none");
      alert("An error occurred. Please try again.");
    }
}
