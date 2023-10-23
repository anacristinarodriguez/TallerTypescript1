import { series } from './data.js';
var seriesTable = document.getElementById("series");
mostrarTablaSeries(series);
function mostrarTablaSeries(datosSeries) {
    var seriesTbody = document.createElement("tbody");
    for (var _i = 0, datosSeries_1 = datosSeries; _i < datosSeries_1.length; _i++) {
        var serie = datosSeries_1[_i];
        var trElement = document.createElement("tr");
        trElement.classList.add("table-light");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n            <td>").concat(serie.nombre, "</td>\n            <td>").concat(serie.canal, "</td>\n            <td>").concat(serie.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTbody);
}
//function average of seasons
function average(series) {
    var sum = 0;
    series.forEach(function (serie) {
        sum += serie.temporadas;
    });
    return sum / series.length;
}
