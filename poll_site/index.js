//https://optimistic-kare-843d65.netlify.app/.netlify/functions/hello
const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const ctx = document.querySelector('#myChart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'bar',

  data: {
    labels: ['A', 'B', 'C', 'D'],
    datasets: [
      {
        label: '# of Votes',
        backgroundColor: 'rgb(255, 99, 132)',
        boderColor: 'rgb(255, 99, 132)',
        data: [12, 19, 3, 5],
      },
    ],
  },

  options,
});

function drawchart(arrData) {
  chart.data.datasets[0].data = arrData;
  chart.update();
}
