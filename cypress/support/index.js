import "cypress-xpath";
import "cypress-file-upload";

Cypress.on("uncaught:exception", (err, runnable) => {
  // Handle the uncaught exception as per your requirements
  // For example, you can log the error or perform custom actions
  console.error("Uncaught exception:", err);

  // Return false to prevent Cypress from failing the test
  return false;
});
