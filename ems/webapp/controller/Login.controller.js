sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], function (Controller) {
    "use strict";
  
    return Controller.extend("com.incture.ems.controller.Login", {
      onLoginPress: function () {
        const oUsername = this.byId("username").getValue();
        const oPassword = this.byId("password").getValue();
  
        // Dummy check
        if (oUsername === "admin" && oPassword === "admin") {
            sap.m.MessageToast.show("Login Successful!");
            this.getOwnerComponent().getRouter().navTo("Home");
          } else {
            sap.m.MessageToast.show("Invalid credentials");
          }
      }
    });
  });
  