$(function () {
  $("#chart").dxChart({
    dataSource: dataSource,
    series: {
      argumentField: "day",
      valueField: "oranges",
      type: "bar",
      color: "#66ff00",
    },
  });
});

var dataSource = [
  {
    day: "Monday",
    oranges: 3,
  },
  {
    day: "Tuesday",
    oranges: 2,
  },
  {
    day: "Wednesday",
    oranges: 3,
  },
  {
    day: "Thursday",
    oranges: 4,
  },
  {
    day: "Friday",
    oranges: 6,
  },
  {
    day: "Saturday",
    oranges: 11,
  },
  {
    day: "Sunday",
    oranges: 4,
  },
];

$(function () {
  var oilOptions = {
      dataSource: oilCosts,
      argumentField: "month",
      valueField: "2010",
      type: "line",
      showMinMax: true,
      tooltip: {
        format: "currency",
      },
    },
    goldOptions = {
      dataSource: goldCosts,
      argumentField: "month",
      valueField: "2010",
      type: "spline",
      lineWidth: 3,
      lineColor: "#9ab57e",
      minColor: "#6babac",
      maxColor: "#ebdd8f",
      showMinMax: true,
      showFirstLast: false,
      tooltip: {
        format: "currency",
      },
    },
    silverOptions = {
      dataSource: silverCosts,
      argumentField: "month",
      valueField: "2010",
      lineColor: "#e8c267",
      firstLastColor: "#e55253",
      pointSize: 6,
      pointSymbol: "square",
      pointColor: "#ebdd8f",
      type: "stepline",
      tooltip: {
        format: "currency",
      },
    };

  $(".line2010").dxSparkline(oilOptions);
  $(".spline2010").dxSparkline(goldOptions);
  $(".stepline2010").dxSparkline(silverOptions);

  $(".line2011").dxSparkline($.extend(oilOptions, { valueField: "2011" }));
  $(".spline2011").dxSparkline($.extend(goldOptions, { valueField: "2011" }));
  $(".stepline2011").dxSparkline(
    $.extend(silverOptions, { valueField: "2011" })
  );

  $(".line2012").dxSparkline($.extend(oilOptions, { valueField: "2012" }));
  $(".spline2012").dxSparkline($.extend(goldOptions, { valueField: "2012" }));
  $(".stepline2012").dxSparkline(
    $.extend(silverOptions, { valueField: "2012" })
  );
});

var oilCosts = [
  {
    month: 1,
    2010: 77,
    2011: 93,
    2012: 107,
  },
  {
    month: 2,
    2010: 72,
    2011: 101,
    2012: 112,
  },
  {
    month: 3,
    2010: 79,
    2011: 115,
    2012: 123,
  },
  {
    month: 4,
    2010: 82,
    2011: 116,
    2012: 123,
  },
  {
    month: 5,
    2010: 86,
    2011: 124,
    2012: 116,
  },
  {
    month: 6,
    2010: 73,
    2011: 115,
    2012: 102,
  },
  {
    month: 7,
    2010: 73,
    2011: 110,
    2012: 94,
  },
  {
    month: 8,
    2010: 77,
    2011: 117,
    2012: 105,
  },
  {
    month: 9,
    2010: 76,
    2011: 113,
    2012: 113,
  },
  {
    month: 10,
    2010: 81,
    2011: 103,
    2012: 111,
  },
  {
    month: 11,
    2010: 83,
    2011: 110,
    2012: 107,
  },
  {
    month: 12,
    2010: 89,
    2011: 109,
    2012: 110,
  },
];

var goldCosts = [
  {
    month: 1,
    2010: 1115,
    2011: 1358,
    2012: 1661,
  },
  {
    month: 2,
    2010: 1099,
    2011: 1375,
    2012: 1742,
  },
  {
    month: 3,
    2010: 1114,
    2011: 1423,
    2012: 1677,
  },
  {
    month: 4,
    2010: 1150,
    2011: 1486,
    2012: 1650,
  },
  {
    month: 5,
    2010: 1205,
    2011: 1511,
    2012: 1589,
  },
  {
    month: 6,
    2010: 1235,
    2011: 1529,
    2012: 1602,
  },
  {
    month: 7,
    2010: 1193,
    2011: 1573,
    2012: 1593,
  },
  {
    month: 8,
    2010: 1220,
    2011: 1765,
    2012: 1634,
  },
  {
    month: 9,
    2010: 1272,
    2011: 1771,
    2012: 1750,
  },
  {
    month: 10,
    2010: 1345,
    2011: 1672,
    2012: 1745,
  },
  {
    month: 11,
    2010: 1370,
    2011: 1741,
    2012: 1720,
  },
  {
    month: 12,
    2010: 1392,
    2011: 1643,
    2012: 1684,
  },
];

var silverCosts = [
  {
    month: 1,
    2010: 17,
    2011: 30,
    2012: 27,
  },
  {
    month: 2,
    2010: 28,
    2011: 28,
    2012: 33,
  },
  {
    month: 3,
    2010: 34,
    2011: 34,
    2012: 35,
  },
  {
    month: 4,
    2010: 37,
    2011: 37,
    2012: 32,
  },
  {
    month: 5,
    2010: 47,
    2011: 47,
    2012: 30,
  },
  {
    month: 6,
    2010: 37,
    2011: 37,
    2012: 28,
  },
  {
    month: 7,
    2010: 34,
    2011: 34,
    2012: 27,
  },
  {
    month: 8,
    2010: 40,
    2011: 40,
    2012: 27,
  },
  {
    month: 9,
    2010: 41,
    2011: 41,
    2012: 31,
  },
  {
    month: 10,
    2010: 30,
    2011: 30,
    2012: 34,
  },
  {
    month: 11,
    2010: 34,
    2011: 34,
    2012: 31,
  },
  {
    month: 12,
    2010: 32,
    2011: 32,
    2012: 33,
  },
];
