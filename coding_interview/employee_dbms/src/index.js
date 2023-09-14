(async function () {
  const data = await fetch("./src/data.json");
  const res = await data.json();

  let employees = res;
  let selectedEmployeeId = employees[0].id;
  let selectedEmployee = employees[0];

  const employeeList = document.querySelector(".employees__names--list");
  const employeeInfo = document.querySelector(".employees__single--info");

  //Add Employee Logic

  //Select Employee Logic
  employeeList.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN" && selectedEmployeeId !== e.target.id) {
      selectedEmployeeId = e.target.id;
      renderEmployees();
      renderSingleEmployee(); //Render SIngle EMployyee
    }
  });

  const renderEmployees = () => {
    //before rendering lets make clear that the div is clear out
    employeeList.innerHTML = "";
    employees.forEach((emp) => {
      const employee = document.createElement("span");
      employee.classList.add("employees__names--item");

      //To identify or to add color to the selected employee make it a little darker.
      if (parseInt(selectedEmployeeId, 10) === emp.id) {
        employee.classList.add("selected");
        selectedEmployee = emp;
      }
      employee.setAttribute("id", emp.id);
      employee.innerHTML = `${emp.firstName} ${emp.lastName} <i class="employeeDelete">❌</i>`;

      employeeList.append(employee);
    });
  };

  //Render single Employee Info
  const renderSingleEmployee = () => {
    //deleting eployee logic

    employeeInfo.innerHTML = `
    <img src="${selectedEmployee.imageUrl}" />
    <span class="employees__single--heading">
    ${selectedEmployee.firstName} ${selectedEmployee.lastName} (${selectedEmployee.age})
    </span>
    <span>${selectedEmployee.address}</span>
    <span>${selectedEmployee.email}</span>
    <span>Mobile - ${selectedEmployee.contactNumber}</span>
    <span>DOB - ${selectedEmployee.dob}</span>
  `;
  };

  if (selectedEmployee) renderSingleEmployee();
  renderEmployees();
})();
