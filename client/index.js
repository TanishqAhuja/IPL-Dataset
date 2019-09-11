function visualizeData(path, container, heading, x, y, colour) {
  fetch(path)
    .then(response => response.json())
    .then(datum => {
      visualize(datum, container, heading, x, y, colour);
    });
}

function getSeries(data, x, y) {
  if (y != "Matches Won") {
    return [
      {
        name: x,
        data: Object.values(data)
      }
    ];
  } else {
    // var a = Object.values(data);
    // var b = [];
    // a.forEach(x => {
    //     b.push(Object.entries(x));
    // });
    // var c = {};
    // b.forEach(x => {
    //     x.forEach(y => {
    //         if(!c[y[0]]){
    //             c[y[0]] = [y[1]];
    //         }
    //         else{
    //             c[y[0]].push(y[1]);
    //         }
    //     });
    // });
    // var d =[];
    // var e = Object.entries(c);
    // e.forEach(x => {
    //     d.push({
    //         name: x[0],
    //         data: x[1]
    //     });
    // });
    // console.log(c);
    // console.log(e);
    // console.log(d);
    // return d;

    return Object.entries(
      Object.values(data)
        .reduce((acc, elememt) => {
          acc.push(Object.entries(elememt));
          return acc;
        }, [])
        .reduce((acc, elememt) => {
          elememt.map(elem => {
            if (!acc[elem[0]]) {
              acc[elem[0]] = [elem[1]];
            } else {
              acc[elem[0]].push(elem[1]);
            }
          });
          return acc;
        }, {})
    ).reduce((series, elememt) => {
      series.push({
        name: elememt[0],
        data: elememt[1]
      });
      return series;
    }, []);
  }
}

function visualize(datum, container, heading, x, y, colour) {
  Highcharts.chart(container, {
    chart: {
      type: "column",
      backgroundColor: "Lightgrey"
    },
    title: {
      text: heading
    },
    xAxis: {
      categories: Object.keys(datum),
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: y
      }
    },
    tooltip: {
      headerFormat: `<span>${x}: <b>{point.key}</b></span><table>`,
      pointFormat:
        `<tr><td style="color:{series.color}">${y}: </td>` +
        "<td><b>{point.y:.2f}</b></td></tr>",
      footerFormat: "</table>",
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
        color: colour
      }
    },
    series: getSeries(datum, x, y)
  });
}

visualizeData(
  "../output/matchesPlayedPerYear.json",
  "container1",
  "Total Matches Played Per Year",
  "Year",
  "Matches Played",
  "Orange"
);
visualizeData(
  "../output/matchesWonPerTeamPerYear.json",
  "container2",
  "Matches Won Per Team Per Year",
  "Team",
  "Matches Won"
);
visualizeData(
  "../output/extraRunsConcededPerTeam2016.json",
  "container3",
  "Extra Runs Conceded in 2016",
  "Team",
  "Runs Conceded",
  "Green"
);
visualizeData(
  "../output/top10EconomicalBowlers2015.json",
  "container4",
  "Top 10 Economical Bowlers",
  "Bowler",
  "Economy",
  "RoyalBlue"
);

function showGraph(myRadio) {
  var others = document.getElementsByClassName("container");
  for (i = 0; i < 4; i++) {
    others[i].style.display = "none";
  }
  var id = "container" + myRadio.value.toString();
  document.getElementById(id).style.display = "block";
}
