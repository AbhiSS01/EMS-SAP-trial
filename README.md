# 👩‍💼 Employee Management System (EMS) – SAPUI5

This is a simple **Employee Management System** built with **SAPUI5**. The app uses local **dummy JSON data** (`EmployeeData.json`) to demonstrate full **CRUD** operations (Create, Read, Update, Delete) using the `sap.m.Table` control.

---

## 📋 Features

✅ Display list of employees  
✅ Edit employee details via popup dialog  
✅ Delete employee records  
✅ Load data from external JSON file 
✅ Built using `sap.ui.model.json.JSONModel`

---

## 📁 Project Structure

webapp/
├── controller/
│ └── View1.controller.js
├── model/
├── view/
│ └── View1.view.xml
├── Component.js
├── manifest.json
└── index.html

---

## 🛠️ Technologies Used

- **SAPUI5 (MVC Architecture)**
- `sap.m.Table`
- `sap.ui.model.json.JSONModel`
- `sap.m.Dialog`
- `sap.m.MessageToast`

---

## 🚀 How to Run

1. Open the project in **SAP Business Application Studio** or any UI5-compatible environment.
2. Run the app using:
   ```bash
   npm install
   npm start
