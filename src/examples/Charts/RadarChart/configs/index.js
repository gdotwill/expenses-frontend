/**
=========================================================
* Expenses  React - v2.2.0
=========================================================

* Product Page: https://www.gm.com/product/material-dashboard-react
* Copyright 2023 Creative GM (https://www.gm.com)

Coded by www.gm.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

function configs(labels, datasets) {
  return {
    data: {
      labels,
      datasets: [...datasets],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
    },
  };
}

export default configs;
