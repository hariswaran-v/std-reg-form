const departments = {
  medical: ["MBBS", "BDS", "Nursing", "Pharmacy", "Dental"],
  agriculture: ["Agri Engineering", "Horticulture", "Animal Science"],
  engineering: [
    "Mechanical Engineering",
    "Aeronautical Engineering",
    "Computer Science Engineering",
    "Auto Mobile Engineering",
    "Civil Engineering",
    "Electrical and Electronics Engineering",
    "Electronics and Communication Engineering",
  ],
  arts_sci: ["BA...", "BBA", "BSc...", "BCA", "BCom..."],
};

// Populate Department Dropdown
document
  .getElementById("languages")
  .addEventListener("change", ({ target }) => {
    const deptSelect = document.getElementById("departmentSelect");
    deptSelect.innerHTML = '<option value="">Select Department</option>';
    deptSelect.disabled = !Object.keys(departments).includes(target.value);

    if (departments[target.value]) {
      departments[target.value].forEach((dept) =>
        deptSelect.add(
          new Option(dept, dept.replace(/\s+/g, "_").toLowerCase())
        )
      );
    }
  });

// Handle Registration Button Click
document.getElementById("registerBtn").addEventListener("click", () => {
  const name = document.getElementById("name")?.value.trim();
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const major = document.getElementById("languages")?.value;
  const dept = document.getElementById("departmentSelect")?.value;

  if (!name || !gender || !major || !dept) {
    alert("Please fill all fields!");
    return;
  }

  // Generate Unique Reg No
  const regNo = "REG" + Math.floor(100000 + Math.random() * 900000);

  // Display the Registered User Details
  document.getElementById("regNo").textContent = regNo;
  document.getElementById("regName").textContent = name;
  document.getElementById("regGender").textContent = gender;
  document.getElementById("regMajor").textContent = major;
  document.getElementById("regDept").textContent = dept;

  document.getElementById("result").classList.remove("hidden");
});
