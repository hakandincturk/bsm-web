// Set new default font family and font color to mimic Bootstrap's default styling

Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Profesör", "Doçent", "Dr. Öğrt. Görevlisi", "Öğretim Görevlisi", "Araştırma Görevlisi"],
    datasets: [{
      data: [306, 223, 469, 463, 877],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#d92e2e', '#e3e334'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf', '#bf2828', '#c9c92e'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});

// Akademik Birim Sayıları
var ctx = document.getElementById("akademikBirimSayilari");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Fakülte', 'Meslek Yüksekokulu', 'Yüksekokul', 'Estitü', 'Araştırma Merkezi'],
    datasets: [{
      data: [18, 16, 3, 4, 13],
      backgroundColor: ['#F56954', '#00A65A', '#F39C12', '#00C0EF', '#3C8DBC'],
      hoverBackgroundColor: ['#db5d4b', '#009652', '#d6890f', '#02b3de', '#367ea8'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});