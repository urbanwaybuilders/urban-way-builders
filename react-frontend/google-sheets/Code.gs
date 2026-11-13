/**
 * Urban Way Builders project-enquiry receiver.
 *
 * Deploy this Apps Script as a Web App:
 * Execute as: Me
 * Who has access: Anyone
 *
 * After editing this file, deploy a new version and update the frontend
 * VITE_GOOGLE_SHEETS_URL only if the deployment URL changes.
 */
const SHEET_NAME = "Enquiries";
const HEADERS = [
  "Timestamp",
  "Name",
  "Email",
  "Phone",
  "Service",
  "Project Location",
  "Message",
  "Source"
];

function doPost(e) {
  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      sheet.appendRow(HEADERS);
      sheet.setFrozenRows(1);
    } else {
      prepareHeaders_(sheet);
    }

    const params = e && e.parameter ? e.parameter : {};

    sheet.appendRow([
      new Date(),
      params.name || "",
      params.email || "",
      params.phone || "",
      params.service || "",
      params.projectLocation || "",
      params.message || "",
      params.source || "Urban Way Builders Website"
    ]);

    return jsonResponse_({ success: true, message: "Enquiry saved" });
  } catch (error) {
    return jsonResponse_({ success: false, error: String(error) });
  }
}

/**
 * Updates the old seven-column Course/Batch header layout without deleting
 * existing enquiry rows. The inserted Project Location column is left blank
 * for historical enquiries.
 */
function prepareHeaders_(sheet) {
  const currentHeaders = sheet
    .getRange(1, 1, 1, Math.max(sheet.getLastColumn(), HEADERS.length))
    .getValues()[0];

  if (currentHeaders[4] === "Course" && currentHeaders[5] === "Message") {
    sheet.insertColumnAfter(5);
    sheet.getRange(1, 5, 1, HEADERS.length - 4).setValues([HEADERS.slice(4)]);
  } else if (currentHeaders[4] === "Service" && currentHeaders[5] === "Project Location") {
    return;
  } else if (sheet.getLastRow() === 0 || !currentHeaders[0]) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.setFrozenRows(1);
  }
}

function jsonResponse_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
