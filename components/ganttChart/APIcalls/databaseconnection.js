// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzxmT-f11hGl4abFD4DkI-gaVmq114syg",
  authDomain: "projecttracker-de0a9.firebaseapp.com",
  databaseURL: "https://projecttracker-de0a9-default-rtdb.firebaseio.com",
  projectId: "projecttracker-de0a9",
  storageBucket: "projecttracker-de0a9.firebasestorage.app",
  messagingSenderId: "62484069140",
  appId: "1:62484069140:web:506f2c9d3028fcca90a001",
  measurementId: "G-FJKHZNQ9VW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore database

// read all file names with the file id
async function readAllDocumentKeys() {
  try {
    const collectionRef = collection(db, "Roadmaps_Board");
    const querySnapshot = await getDocs(collectionRef);
    const documentIds = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.filename) {
        documentIds.push({
          title: data.filename,
          value: doc.id
        });
      }
    });
    return documentIds;
  } catch (error) {
    console.error("Error getting documents: ", error);
  }
}

readAllDocumentKeys()

// Function to populate the dropdown
async function populateDropdown() {
    const data = await readAllDocumentKeys();
    const dropdownMenu = document.getElementById('dropdown-menu');

    dropdownMenu.innerHTML = '';
  
    // Populate the dropdown menu with fetched data
    data.forEach((item) => {
      const dropdownItem = document.createElement('a');
      dropdownItem.classList.add('dropdown-item');
      dropdownItem.href = '#';
      const titleSpan = document.createElement('span');
      titleSpan.textContent = item.title + ' : ';
      const fileIdSpan = document.createElement('span');
      fileIdSpan.textContent = item.value;
      fileIdSpan.style.fontWeight = 'bold';
      dropdownItem.appendChild(titleSpan);
      dropdownItem.appendChild(fileIdSpan);
  
      dropdownItem.addEventListener('click', function() {
        const button = document.getElementById('dropdownMenuButton');
        button.textContent = item.title;
        button.setAttribute('data-value', item.value);
        // fetchChartData(item.value);
      });
  
      dropdownMenu.appendChild(dropdownItem);
    });
  }
  export {populateDropdown}
  
//   // Call the populate function when the content is loaded
//   document.addEventListener('DOMContentLoaded', () => {
//     populateDropdown();
//   });

