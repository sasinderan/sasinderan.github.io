var xValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

        new Chart("myChart", {
          type: "line",
          data: {
            labels: xValues,
            datasets: [{
              data: [500, 2000, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
              borderColor: "red",
              fill: false
            }, {
              data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
              borderColor: "green",
              fill: false
            }, {
              data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
              borderColor: "blue",
              fill: false
            }]
          },
          options: {
            legend: { display: false }
          }
        });
        //-----display function-----//
        function display() {

          var inner = document.getElementById("firstBox").style.display;
          if (inner == 'none') {
            document.getElementById("firstBox").style.display = 'block';
            document.getElementById("secondBox").changeSecondcontainer;



          }
          else {
            document.getElementById("firstBox").style.display = 'none';
            document.getElementById("secondBox").secondContainer;

          }
         }
         //display function Ends
         var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart2", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "HEXNODE USER'S"
    }
  }
});