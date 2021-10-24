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
        data: [0, 0, 0, 0],
      },
    ],
  },

  options,
});

function drawchart(arrData) {
  console.log('🚀 ~ file: index.js ~ line 33 ~ drawchart ~ arrData', arrData);
  chart.data.datasets[0].data = arrData;
  chart.update();
}

async function voting(e) {
  if (!e.target.matches('button')) return;

  const vote = e.target.id;
  console.log('🚀 ~ f vote', vote);

  const res = await fetch(
    `https://optimistic-kare-843d65.netlify.app/.netlify/functions/hello?vote=${vote}`
  );
  const data = await res.json();
  drawchart(data);
}
const voteArea = document.querySelector('#voteArea');
voteArea.addEventListener('click', voting);
