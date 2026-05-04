const express = require("express");
const os = require("os");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

function formatMemory(bytes) {
  return `${(bytes / 1024 / 1024 / 1024).toFixed(2)} GB`;
}

function formatUptime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  return `${hours}h ${minutes}min ${remainingSeconds}s`;
}

app.get("/", (req, res) => {
  const cpus = os.cpus();
  const systemInfo = [
    ["Hostname", os.hostname()],
    ["Platform", os.platform()],
    ["Architecture", os.arch()],
    ["Number of CPUs", cpus.length],
    ["CPU model", cpus[0] ? cpus[0].model : "Not available"],
    ["Total memory", formatMemory(os.totalmem())],
    ["Free memory", formatMemory(os.freemem())],
    ["System uptime", formatUptime(os.uptime())]
  ];

  const tableRows = systemInfo
    .map(([label, value]) => `
      <tr>
        <th>${label}</th>
        <td>${value}</td>
      </tr>
    `)
    .join("");

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Cloud SO App</title>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <main class="container">
        <section class="card">
          <header>
            <p class="subject">Cloud Computing and Operating Systems</p>
            <h1>Operating System Information</h1>
            <p class="author">Developed by Mavelyn</p>
          </header>

          <table>
            <tbody>
              ${tableRows}
            </tbody>
          </table>

          <footer>
            Academic project developed by Mavelyn Leme
          </footer>
        </section>
      </main>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
