// Your existing code for the shows array and forEach loop remains unchanged.

const eventData = [
  // Your event data here
];

function createTableV2(data) {
  const table = document.getElementById("event-table");
  const tbody = table.querySelector("tbody");

  tbody.innerHTML = data
    .map(
      (item) => `
        <tr>
            <td>${item.date}</td>
            <td>${item.venue}</td>
            <td>${item.location}</td>
            <td class="buy-ticket-btn"><a href="${item.link}" >BUY TICKETS</a></td>
        </tr>
    `
    )
    .join("");
}

// Create the table
const table = createTableV2(eventData);

// Append the table above the footer
const footer = document.querySelector("footer");
document.body.insertBefore(table, footer);
