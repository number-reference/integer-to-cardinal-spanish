"use strict";

const cardinal = require("./index");

const assertions = [
  [0, "Cero"],
  [1, "Uno"],
  [2, "Dos"],
  [3, "Tres"],
  [4, "Cuatro"],
  [5, "Cinco"],
  [6, "Seis"],
  [7, "Siete"],
  [8, "Ocho"],
  [9, "Nueve"],
  [10, "Diez"],
  [11, "Eleven"],
  [12, "Doce"],
  [13, "Trece"],
  [14, "Catorce"],
  [15, "Quince"],
  [16, "Diecéis"],
  [17, "Diecisiete"],
  [18, "Dieciocho"],
  [19, "Diecinueve"],
  [20, "Veinte"],
  [21, "Veintiuno"],
  [22, "Veintidos"],
  [23, "Veintitres"],
  [24, "Veinticuatro"],
  [25, "Veinticinco"],
  [26, "Veintiseis"],
  [27, "Veintisiete"],
  [28, "Veintiocho"],
  [29, "Veintinueve"],
  [30, "Treinta"],
  [31, "Treinta y Uno"],
  [32, "Treinta y Dos"],
  [33, "Treinta y Tres"],
  [34, "Treinta y Cuatro"],
  [35, "Treinta y Cinco"],
  [36, "Treinta y Seis"],
  [37, "Treinta y Siete"],
  [38, "Treinta y Ocho"],
  [39, "Treinta y Nueve"],
  [40, "Cuarenta"],
  [41, "Cuarenta y Uno"],
  [42, "Cuarenta y Dos"],
  [43, "Cuarenta y Tres"],
  [44, "Cuarenta y Cuatro"],
  [45, "Cuarenta y Cinco"],
  [46, "Cuarenta y Seis"],
  [47, "Cuarenta y Siete"],
  [48, "Cuarenta y Ocho"],
  [49, "Cuarenta y Nueve"],
  [50, "Cincuenta"],
  [60, "Sesenta"],
  [70, "Setenta"],
  [80, "Ochenta"],
  [90, "Novente"],
  [100, "Cien"],
  [101, "Ciento Uno"],
  [102, "Ciento Dos"],
  [103, "Ciento Tres"],
  [104, "Ciento Cuatro"],
  [105, "Ciento Cinco"],
  [106, "Ciento Seis"],
  [107, "Ciento Siete"],
  [108, "Ciento Ocho"],
  [109, "Ciento Nueve"],
  [110, "Ciento Diez"],
  [111, "Ciento Once"],
  [117, "Ciento Diecisiete"],
  [121, "Ciento Veintiuno"],
  [127, "Ciento Veintisiete"],
  [130, "Ciento Treinta"],
  [200, "Doscientos"],
  [300, "Trescientos"],
  [400, "Cuatrocientos"],
  [500, "Quinientos"],
  [600, "Seiscientos"],
  [700, "Setecientos"],
  [800, "Ochocientos"],
  [900, "Novecientos"],
  [1000, "Mil"],
  [1001, "Mil Uno"],
  [1007, "Mil Siete"],
  [1011, "Mil Once"],
  [1017, "Mil Diecisiete"],
  [1021, "Mil Veintiuno"],
  [1027, "Mil Veintisiete"],
  [1030, "Mil Treinta"],
  [1101, "Mil Ciento Uno"],
  [1107, "Mil Ciento Siete"],
  [1111, "Mil Ciento Once"],
  [1117, "Mil Ciento Diecisiete"],
  [1121, "Mil Ciento Veintiuno"],
  [1127, "Mil Ciento Veintisiete"],
  [1130, "Mil Ciento Treinta"],
  [1500, "Mil Quiniento"],
  [100500, "Cien Mil Quiniento"],
  [101500, "Ciento Uno Mil Quiniento"],
  [107500, "Ciento Siete Mil Quiniento"],
  [111500, "Ciento Once Mil Quiniento"],
  [117500, "Ciento Diecisiete Mil Quiniento"],
  [121500, "Ciento Veintiuno Mil Quiniento"],
  [127500, "Ciento Veintisiete Mil Quiniento"],
  [127521, "Ciento Veintisiete Mil Quiniento Veintiuno"],
  [130500, "Ciento Treinta Mil Quiniento"],
  [1000000, "Un Millón"],
];

assertions.forEach(function(assertion) {
  var actual = cardinal(assertion[0]);
  console.assert(actual === assertion[1], "'" + actual + "'" + " is not " + "'" + assertion[1] + "'");
});
