/* =============================================
   Digital ZN — Quotation Print Page
   print.js  (loaded by quotation.html only)
   ============================================= */

/**
 * Format a number with locale and the stored currency symbol.
 * quotation.html has no access to main.js so we define fmt here.
 */
function fmt(n) {
  const data     = JSON.parse(localStorage.getItem("quotation") || "{}");
  const currency = data.currency || "DH";
  return Number(n).toLocaleString("fr-MA") + " " + currency;
}

// Read quotation data saved by the calculator
const quotation = JSON.parse(localStorage.getItem("quotation") || "null");

if (!quotation) {
  document.body.innerHTML =
    '<p style="font-family:Arial;padding:40px;color:red;">No quotation data found. Please go back to the calculator.</p>';
} else {

  // Populate client info
  document.getElementById("client").textContent  = quotation.client  || "-";
  document.getElementById("project").textContent = quotation.project || "-";
  document.getElementById("date").textContent    = quotation.date    || "-";

  // Populate services table
  const tbody = document.getElementById("services");
  if (quotation.services && quotation.services.length > 0) {
    quotation.services.forEach(service => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${service.name}</td>
        <td>${service.qty}</td>
        <td>${fmt(service.price)}</td>
        <td>${fmt(service.total)}</td>
      `;
      tbody.appendChild(tr);
    });
  } else {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align:center;color:#999;">No services selected</td></tr>`;
  }

  // Populate summary
  document.getElementById("invoice").textContent   = fmt(quotation.invoice);
  document.getElementById("costs").textContent     = fmt(quotation.costs);
  document.getElementById("profit").textContent    = fmt(quotation.profit);
  document.getElementById("recommend").textContent = fmt(quotation.recommend);

  // Trigger browser print dialog
  window.onload = () => { window.print(); };
}
