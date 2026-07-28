/* =============================================
   Digital ZN — PDF Export
   pdf.js  (depends on main.js being loaded first)
   ============================================= */

/**
 * Build a table-only HTML string for the PDF.
 * html2canvas has limited CSS support; we use only tables + inline styles.
 * Uses getSelectedServices(), fmt(), getInvoice(), getCosts(), getNetProfit() from main.js.
 */
function buildPDFHtml() {
  const client   = document.getElementById("client-name").value.trim()  || "Unknown Client";
  const project  = document.getElementById("project-name").value.trim() || "Untitled Project";
  const date     = document.getElementById("project-date").value        || "-";
  const currency = document.getElementById("currency").value            || "DH";

  const invoice   = getInvoice();
  const costs     = getCosts();
  const net       = getNetProfit();
  const margin    = Math.round(net * 0.40);
  const recommend = net + margin;

  /* ── Services rows ─────────────────────── */
  const services = getSelectedServices();
  let serviceRows = "";

  if (services.length === 0) {
    serviceRows = `
      <tr>
        <td colspan="4"
            style="padding:12px;text-align:center;color:#888;font-style:italic;">
          No services selected.
        </td>
      </tr>`;
  } else {
    services.forEach(function(s) {
      serviceRows += `
        <tr>
          <td style="padding:10px 12px;border-bottom:1px solid #eee;">${s.name}</td>
          <td style="padding:10px 12px;border-bottom:1px solid #eee;text-align:center;">${s.qty}</td>
          <td style="padding:10px 12px;border-bottom:1px solid #eee;text-align:right;">${fmt(s.price)}</td>
          <td style="padding:10px 12px;border-bottom:1px solid #eee;text-align:right;font-weight:bold;">${fmt(s.total)}</td>
        </tr>`;
    });
  }

  /* ── Full document HTML ─────────────────── */
  return `
<div style="
  width: 780px;
  background: white;
  padding: 50px 60px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  color: #222;
  line-height: 1.6;
">

  <!-- === HEADER === -->
  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;border-bottom:3px solid #5B4FE8;padding-bottom:18px;">
    <tr>
      <td style="vertical-align:middle;">
        <div style="font-size:30px;font-weight:bold;color:#5B4FE8;letter-spacing:2px;">DIGITAL ZN</div>
        <div style="font-size:15px;color:#888;margin-top:2px;">Creative Digital Solutions</div>
      </td>
      <td align="right" style="vertical-align:middle;">
        <div style="font-size:20px;font-weight:bold;color:#333;">QUOTATION</div>
        <div style="font-size:12px;color:#aaa;margin-top:4px;">DZN-${Date.now().toString().slice(-6)}</div>
      </td>
    </tr>
  </table>

  <!-- === CLIENT / PROJECT INFO === -->
  <table width="100%" cellpadding="0" cellspacing="0"
         style="background:#f7f7f7;border-radius:6px;margin-bottom:28px;padding:18px;">
    <tr>
      <td width="33%" style="padding:0 12px 0 0;vertical-align:top;">
        <div style="font-size:11px;text-transform:uppercase;color:#999;letter-spacing:1px;margin-bottom:4px;">Client</div>
        <div style="font-size:16px;font-weight:bold;color:#111;">${client}</div>
      </td>
      <td width="33%" style="padding:0 12px;vertical-align:top;">
        <div style="font-size:11px;text-transform:uppercase;color:#999;letter-spacing:1px;margin-bottom:4px;">Project</div>
        <div style="font-size:16px;font-weight:bold;color:#111;">${project}</div>
      </td>
      <td width="33%" style="padding:0 0 0 12px;vertical-align:top;">
        <div style="font-size:11px;text-transform:uppercase;color:#999;letter-spacing:1px;margin-bottom:4px;">Date</div>
        <div style="font-size:16px;font-weight:bold;color:#111;">${date}</div>
      </td>
    </tr>
  </table>

  <!-- === SERVICES TABLE === -->
  <div style="font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#666;margin-bottom:8px;font-weight:bold;">Services</div>
  <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:28px;">
    <thead>
      <tr style="background:#5B4FE8;color:white;">
        <th align="left"  style="padding:10px 12px;">Service</th>
        <th align="center" style="padding:10px 12px;">Qty</th>
        <th align="right"  style="padding:10px 12px;">Unit Price</th>
        <th align="right"  style="padding:10px 12px;">Total</th>
      </tr>
    </thead>
    <tbody>
      ${serviceRows}
    </tbody>
  </table>

  <!-- === SUMMARY TABLE === -->
  <div style="font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#666;margin-bottom:8px;font-weight:bold;">Summary</div>
  <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
    <tr>
      <td style="padding:9px 0;border-bottom:1px solid #eee;color:#555;">Project Total</td>
      <td align="right" style="padding:9px 0;border-bottom:1px solid #eee;font-weight:bold;">${fmt(invoice)}</td>
    </tr>
    <tr>
      <td style="padding:9px 0;border-bottom:1px solid #eee;color:#555;">Business Costs</td>
      <td align="right" style="padding:9px 0;border-bottom:1px solid #eee;font-weight:bold;color:#BA7517;">${fmt(costs)}</td>
    </tr>
    <tr>
      <td style="padding:9px 0;border-bottom:1px solid #eee;color:#555;">Estimated Profit</td>
      <td align="right" style="padding:9px 0;border-bottom:1px solid #eee;font-weight:bold;color:#1D9E75;">${fmt(net)}</td>
    </tr>
    <tr>
      <td style="padding:12px;background:#5B4FE8;color:white;font-weight:bold;font-size:15px;">
        Recommended Price
        <span style="font-size:11px;font-weight:normal;opacity:0.8;">(base + 40% margin)</span>
      </td>
      <td align="right"
          style="padding:12px;background:#5B4FE8;color:white;font-weight:bold;font-size:18px;">
        ${fmt(recommend)}
      </td>
    </tr>
  </table>

  <!-- === FOOTER === -->
  <table width="100%" cellpadding="0" cellspacing="0"
         style="margin-top:40px;padding-top:16px;border-top:1px solid #eee;">
    <tr>
      <td align="center" style="color:#aaa;font-size:12px;">
        <span style="color:#5B4FE8;font-weight:bold;">Digital ZN</span>
        &nbsp;&mdash;&nbsp;Creative Digital Solutions
        &nbsp;|&nbsp; contact@digital-zn.com
        &nbsp;|&nbsp; www.digital-zn.com
      </td>
    </tr>
  </table>

</div>`;
}

/**
 * Generate and download a PDF quotation using html2pdf.js.
 * Passes an HTML string so html2pdf manages DOM insertion itself.
 */
async function exportPDF() {
  const client = document.getElementById("client-name").value.trim() || "Unknown-Client";

  const opts = {
    filename:    "DigitalZN-" + client.replace(/\s+/g, "-") + ".pdf",
    margin:      10,
    image:       { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, logging: false },
    jsPDF:       { unit: "mm", format: "a4", orientation: "portrait" }
  };

  // Pass as string — html2pdf handles appending/removing the element
  await html2pdf().from(buildPDFHtml()).set(opts).save();
}
