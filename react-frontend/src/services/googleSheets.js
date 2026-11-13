
const SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL;

export async function submitEnquiry(formData) {
  // Check Google Sheets configuration
  if (!SHEETS_URL) {
    throw new Error(
      "Google Sheets is not configured. Check VITE_GOOGLE_SHEETS_URL in your .env file."
    );
  }

  // Prepare enquiry details
  const payload = new URLSearchParams({
    action: "urbanWayBuilders",

    name: formData.name?.trim() || "",
    email: formData.email?.trim() || "",
    phone: formData.phone?.trim() || "",

    service: formData.service?.trim() || "",
    projectLocation: formData.projectLocation?.trim() || "",

    message: formData.message?.trim() || ""
  });

  // Validate required fields
  if (!payload.get("name") || !payload.get("phone")) {
    throw new Error("Please enter your name and phone number.");
  }

  if (!payload.get("service")) {
    throw new Error("Please select a construction service.");
  }

  if (!payload.get("projectLocation")) {
    throw new Error("Please enter your project location.");
  }

  try {
    await fetch(SHEETS_URL, {
      method: "POST",
      mode: "no-cors",
      body: payload
    });

    return true;

  } catch (error) {
    throw new Error(
      "Unable to send your enquiry. Check your internet connection and try again."
    );
  }
}
