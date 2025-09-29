// Sample employee data with 15 members
const employees = [
  { id: 1, name: "John Doe", position: "Software Engineer" },
  { id: 2, name: "Jane Smith", position: "Product Manager" },
  { id: 3, name: "Sam Wilson", position: "UX Designer" },
  { id: 4, name: "Emily Taylor", position: "HR Manager" },
  { id: 5, name: "Michael Brown", position: "Data Scientist" },
  { id: 6, name: "Olivia Williams", position: "Marketing Specialist" },
  { id: 7, name: "Liam Johnson", position: "Sales Director" },
  { id: 8, name: "Emma Davis", position: "Customer Support" },
  { id: 9, name: "Noah Martinez", position: "Software Tester" },
  { id: 10, name: "Ava Lee", position: "Business Analyst" },
  { id: 11, name: "Lucas Perez", position: "Security Engineer" },
  { id: 12, name: "Sophia Harris", position: "Content Creator" },
  { id: 13, name: "James Clark", position: "Product Owner" },
  { id: 14, name: "Charlotte Lewis", position: "Operations Manager" },
  { id: 15, name: "Benjamin Walker", position: "Graphic Designer" }
];

// Function to display all employees
function displayEmployees(filteredEmployees = employees) {
  const employeeList = document.getElementById('employee-list');
  employeeList.innerHTML = ''; // Clear the existing list

  filteredEmployees.forEach(employee => {
    const card = document.createElement('div');
    card.classList.add('employee-card');

    card.innerHTML = `
      <h3>${employee.name}</h3>
      <p>${employee.position}</p>
    `;
    
    employeeList.appendChild(card);
  });
}

// Search employee based on name
function searchEmployee() {
  const searchInput = document.getElementById('search').value.toLowerCase();
  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchInput)
  );

  displayEmployees(filteredEmployees);
}

// Initial display
displayEmployees();

