(function () {
  // URL of the maintenance page
  var maintenanceUrl = "maintenance.html";

  // Function to check if maintenance mode is active
  function checkMaintenanceMode() {
    // Ideally, this check would be dynamic (e.g., via an API or server-side check)
    // For simplicity, we'll use a query parameter to simulate maintenance mode
    var isMaintenanceMode =
      window.location.search.indexOf("maintenance=true") !== -1;

    if (isMaintenanceMode) {
      // Redirect to the maintenance page
      window.location.href = maintenanceUrl;
    }
  }

  // Check maintenance mode on page load
  checkMaintenanceMode();
})();
