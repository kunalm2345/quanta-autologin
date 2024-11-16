// content.js

// Function to click on the email div
function clickEmailDiv() {
  // Select any div with data-email ending in @goa.bits-pilani.ac.in
  const emailDiv = document.querySelector(
    'div[data-email$="@goa.bits-pilani.ac.in"]',
  );
  if (emailDiv) {
    console.log("Email div found. Clicking...");
    emailDiv.click();
  } else {
    console.log("Email div not found.");
  }
}

// Function to click on the Google login button
function clickGoogleButton() {
  const googleButton = document.querySelector(
    'a[title="Google"].btn.btn-secondary.btn-block',
  );
  if (googleButton) {
    console.log("Google button found. Clicking...");
    googleButton.click();
  } else {
    console.log("Google button not found.");
  }
}

// Function to redirect to the login page with URL parameters
function redirectToLogin() {
  const currentUrl = window.location.href;
  const redirectUrl = "https://quantaaws.bits-goa.ac.in/login/index.php";

  // Check if there are URL parameters
  const urlParams = new URL(currentUrl).search;

  // Redirect with parameters if they exist
  if (urlParams) {
    window.location.href = redirectUrl + urlParams;
    console.log("Redirecting to:", redirectUrl + urlParams);
  } else {
    window.location.href = redirectUrl;
    console.log("Redirecting to:", redirectUrl);
  }
}

// Execute the appropriate function based on the URL
if (
  (window.location.href === "https://quantaaws.bits-goa.ac.in/") |
  (window.location.href === "https://quantaaws.bits-goa.ac.in/?")
) {
  redirectToLogin();
} else if (
  window.location.href.includes(
    "https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount",
  )
) {
  clickEmailDiv();
} else if (
  window.location.href.includes(
    "https://quantaaws.bits-goa.ac.in/login/index.php",
  )
) {
  clickGoogleButton();
}
