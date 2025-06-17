sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/export/Spreadsheet"
], (Controller, Spreadsheet) => {
    "use strict";

    return Controller.extend("com.incture.ems.controller.Home", {
        onInit: function () {
            var oData = {
                "employees": [
                  {
                    "EMP_ID": 1,
                    "COUNTRY": "USA",
                    "CURRENT_ADD": "NYC",
                    "PRESENT_ADD": "chicago",
                    "PHONE_NUMBER": "5551234567",
                    "PINCODE": "32801",
                    "STATE": "Florida",
                    "AGE": 40,
                    "EMAIL": "liam.brown@example.com",
                    "GENDER": "Male",
                    "IS_ACTIVE": false,
                    "NAME": "Liam Brown",
                    "SALARY": 95000.0,
                    "BONUS": 12000.0,
                    "DEDUCTIONS": 4000.0,
                    "NETPAY": 103000.0,
                    "PROJECT_ID": 1,
                    "SKILL": "JAVA SpringBoot"
                  },
                  {
                    "EMP_ID": 2,
                    "COUNTRY": "USA",
                    "CURRENT_ADD": "NYC",
                    "PRESENT_ADD": "Egypt",
                    "PHONE_NUMBER": "5551234567",
                    "PINCODE": "32801",
                    "STATE": "Florida",
                    "AGE": 40,
                    "EMAIL": "liam.brown@example.com",
                    "GENDER": "Male",
                    "IS_ACTIVE": false,
                    "NAME": "Liam Brown",
                    "SALARY": 95000.0,
                    "BONUS": 12000.0,
                    "DEDUCTIONS": 4000.0,
                    "NETPAY": 103000.0,
                    "PROJECT_ID": 2,
                    "SKILL": "Deep Learning"
                  },
                  {
                    "EMP_ID": 3,
                    "COUNTRY": "India",
                    "CURRENT_ADD": "Delhi",
                    "PRESENT_ADD": "Bihar",
                    "PHONE_NUMBER": "9876543210",
                    "PINCODE": "560001",
                    "STATE": "Karnataka",
                    "AGE": 29,
                    "EMAIL": "aarav.verma@example.com",
                    "GENDER": "Male",
                    "IS_ACTIVE": true,
                    "NAME": "Aarav Verma",
                    "SALARY": 65000.0,
                    "BONUS": 7000.0,
                    "DEDUCTIONS": 2000.0,
                    "NETPAY": 70000.0,
                    "PROJECT_ID": 3,
                    "SKILL": "REACT"
                  },
                  {
                    "EMP_ID": 4,
                    "COUNTRY": "Germany",
                    "CURRENT_ADD": "hanoa",
                    "PRESENT_ADD": "chicago",
                    "PHONE_NUMBER": "491234567890",
                    "PINCODE": "10115",
                    "STATE": "Berlin",
                    "AGE": 35,
                    "EMAIL": "lara.schmidt@example.com",
                    "GENDER": "Female",
                    "IS_ACTIVE": true,
                    "NAME": "Lara Schmidt",
                    "SALARY": 88000.0,
                    "BONUS": 10000.0,
                    "DEDUCTIONS": 3000.0,
                    "NETPAY": 95000.0,
                    "PROJECT_ID": 4,
                    "SKILL": "ASSEMBLY"
        
                  }
                ]
              };
            var oModel = new sap.ui.model.json.JSONModel(oData);
            this.getView().setModel(oModel);
            const oApp = sap.ui.getCore().byId("myApp");
            if (oApp) {
              oApp.removeAllPages();
              oApp.addPage(this.getView());
            }
        },
          
        onSetPress: function(oEvent){
            var oBtn = oEvent.getSource();
            if (!this._pActionSheet) {
              this._pActionSheet = sap.ui.core.Fragment.load({
                  id: this.getView().getId(), 
                  name: "com.incture.ems.view.ActionSheet",  
                  controller: this
              }).then(function (oActionSheet) {
                  this.getView().addDependent(oActionSheet); 
                  return oActionSheet;
              }.bind(this));
          }
      
        
          this._pActionSheet.then(function (oActionSheet) {
              oActionSheet.openBy(oBtn);
          });
        },
        openDialog: function(oEvent){
            if (!this.pDialog) {
                this.pDialog = sap.ui.xmlfragment("com.incture.ems.view.AddEmployeeDialog", this);
                this.getView().addDependent(this.pDialog);
              }
              this.pDialog.open();
            },
            
            onCloseDialog: function () {
              this.pDialog.close();
              sap.ui.getCore().byId("empId").setValue("");
              sap.ui.getCore().byId("name").setValue("");
              sap.ui.getCore().byId("email").setValue("");
              sap.ui.getCore().byId("country").setValue("");
              sap.ui.getCore().byId("currentAdd").setValue("");
              sap.ui.getCore().byId("presentAdd").setValue("");
              sap.ui.getCore().byId("phone").setValue("");
              sap.ui.getCore().byId("pincode").setValue("");
              sap.ui.getCore().byId("state").setValue("");
              sap.ui.getCore().byId("age").setValue("");
              sap.ui.getCore().byId("gender").setValue("");
              sap.ui.getCore().byId("isActive").setValue("");
              sap.ui.getCore().byId("salary").setValue("");
              sap.ui.getCore().byId("bonus").setValue("");
              sap.ui.getCore().byId("deductions").setValue("");
              sap.ui.getCore().byId("projectId").setValue("");

            },
            
            onCreateEmployee: function () {
              const oView = this.getView();
            
              const newEmp = {
                EMP_ID: parseInt(sap.ui.getCore().byId("empId").getValue()),
                NAME: sap.ui.getCore().byId("name").getValue(),
                EMAIL: sap.ui.getCore().byId("email").getValue(),
                COUNTRY: sap.ui.getCore().byId("country").getValue(),
                CURRENT_ADD: sap.ui.getCore().byId("currentAdd").getValue(),
                PRESENT_ADD: sap.ui.getCore().byId("presentAdd").getValue(),
                PHONE_NUMBER: sap.ui.getCore().byId("phone").getValue(),
                PINCODE: sap.ui.getCore().byId("pincode").getValue(),
                STATE: sap.ui.getCore().byId("state").getValue(),
                AGE: parseInt(sap.ui.getCore().byId("age").getValue()),
                GENDER: sap.ui.getCore().byId("gender").getValue(),
                IS_ACTIVE: sap.ui.getCore().byId("isActive").getValue() === "true",
                SALARY: parseFloat(sap.ui.getCore().byId("salary").getValue()),
                BONUS: parseFloat(sap.ui.getCore().byId("bonus").getValue()),
                DEDUCTIONS: parseFloat(sap.ui.getCore().byId("deductions").getValue()),
                NETPAY: 0,
                PROJECT_ID: parseInt(sap.ui.getCore().byId("projectId").getValue())
              };
              
              newEmp.NETPAY = newEmp.SALARY + newEmp.BONUS - newEmp.DEDUCTIONS;
            
              const oModel = this.getView().getModel();
              const aEmployees = oModel.getProperty("/employees");
              aEmployees.push(newEmp);
              oModel.setProperty("/employees", aEmployees);
            
              this.onCloseDialog();
              sap.m.MessageToast.show("Employee Created!");
        },
        onDeletePress: function(oEvent){
            const oTable= this.byId("employeeTable");
            const oItem= oEvent.getSource().getParent();
            const sPath = oItem.getBindingContext().getPath();

            const oModel= this.getView().getModel();
            const aData= oModel.getProperty("/employees");

            const iIndex = parseInt(sPath.split("/")[2]);

            if(!isNaN(iIndex)){
                aData.splice(iIndex, 1);
                oModel.setProperty("/employees", aData);
                sap.m.MessageToast.show("Employee deleted.");
            }
        },
        onToggleTheme: function () {
          const oCore = sap.ui.getCore();
          const sCurrentTheme = oCore.getConfiguration().getTheme();
        
          if (sCurrentTheme === "sap_horizon") {
              oCore.applyTheme("sap_horizon_dark");
              sap.m.MessageToast.show("Dark theme applied");
          } else if (sCurrentTheme === "sap_horizon_dark") {
              oCore.applyTheme("sap_belize");
              sap.m.MessageToast.show("Belize theme applied");
          } else if (sCurrentTheme === "sap_belize") {
                oCore.applyTheme("sap_horizon_hcw");
                sap.m.MessageToast.show("HCW theme applied");
          } else {
              oCore.applyTheme("sap_horizon");
              sap.m.MessageToast.show("Light theme applied");
          }
        },


        //download
        onDownloadPress: function () {
          const oModel = this.getView().getModel();
          const aData = oModel.getProperty("/employees"); // adjust path if needed
        
          if (!aData || !aData.length) {
            sap.m.MessageToast.show("No data available to download.");
            return;
          }
        
          // Step 1: Extract column headers
          const aHeaders = Object.keys(aData[0]);
          let csvContent = aHeaders.join(",") + "\n";
        
          // Step 2: Append row data
          aData.forEach(row => {
            const rowData = aHeaders.map(key => `"${row[key]}"`).join(",");
            csvContent += rowData + "\n";
          });
        
          // Step 3: Create and download the CSV file
          const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
          const fileName = "employee_data.csv";
        
          if (window.navigator.msSaveBlob) {
            // For IE
            navigator.msSaveBlob(blob, fileName);
          } else {
            const link = document.createElement("a");
            const url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", fileName);
            link.style.visibility = "hidden";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }
        
          sap.m.MessageToast.show("Download started.");
        },
        onExportPress: function () {
          const oModel = this.getView().getModel();
          const aData = oModel.getProperty("/employees");
    
          if (!aData || !aData.length) {
            sap.m.MessageToast.show("No data available for export.");
            return;
          }
    
          const oExportSettings = {
            workbook: {
              columns: [
                { label: "EMP ID", property: "EMP_ID" },
                { label: "Name", property: "NAME" },
                { label: "Email", property: "EMAIL" },
                { label: "Country", property: "COUNTRY" },
                { label: "Skill", property: "SKILL" },
                { label: "Gender", property: "GENDER"},
                { label: "Salary", property: "SALARY", type: "number" },
                { label: "Bonus", property: "BONUS", type: "number" },
                { label: "Net Pay", property: "NETPAY", type: "number" },
                { label: "Net Pay", property: "NETPAY", type: "number" }
                // Add more columns as needed
              ]
            },
            dataSource: aData,
            fileName: "Employee_Data.xlsx",
            worker: false // true = use web worker (async), false = sync
          };
    
          const oSpreadsheet = new Spreadsheet(oExportSettings);
          oSpreadsheet.build()
            .then(() => {
              sap.m.MessageToast.show("Excel exported successfully.");
            })
            .catch((err) => {
              console.error("Export error:", err);
            });
        },
        onApplyDynamicFilter: function () {
          const sQuery = this.byId("filterInput").getValue().trim();
          const oTable = this.byId("employeeTable");
          const oBinding = oTable.getBinding("items");
      
          if (!sQuery) {
              sap.m.MessageToast.show("Please enter a country or employee name.");
              return;
          }
      
          // Filter for COUNTRY or NAME (case-insensitive contains)
          const oFilter = new sap.ui.model.Filter({
              filters: [
                  new sap.ui.model.Filter("COUNTRY", sap.ui.model.FilterOperator.Contains, sQuery),
                  new sap.ui.model.Filter("NAME", sap.ui.model.FilterOperator.Contains, sQuery),
                  new sap.ui.model.Filter("GENDER", sap.ui.model.FilterOperator.Contains, sQuery),
                  new sap.ui.model.Filter("SKILL", sap.ui.model.FilterOperator.Contains, sQuery),
                  
            
              ],
              and: false
          });
      
          oBinding.filter([oFilter]);
          sap.m.MessageToast.show("Filtered by input: " + sQuery);
      },
      
      onClearFilter: function () {
          this.byId("filterInput").setValue("");
          const oTable = this.byId("employeeTable");
          const oBinding = oTable.getBinding("items");
          oBinding.filter([]);
          sap.m.MessageToast.show("Filter cleared");
      },
      onCall: async function(oEvent){
        const url = `https://api.allorigins.win/raw?url=${encodeURIComponent("https://api.weatherapi.com/v1/current.json?key=c24abdc8478e4c8c91f50914251606&q=London&aqi=yes")}`;
        try {
          const response = await fetch(url);
          const data = await response.json();
          console.log(data);
          return data;
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      }
        
        
    });
});