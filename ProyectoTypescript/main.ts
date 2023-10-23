import { Serie } from './serie.js';
import { series } from './data.js';

let seriesTable: HTMLElement = document.getElementById("series")!;
let promedioTemporadasElement: HTMLElement = document.getElementById("promedioTemporadas")!;
let seriesInfo: HTMLElement = document.getElementById('seriesInfo')!;


mostrarTablaSeries(series);
promedioTemporadasElement.innerHTML = `<b>Seasons average:</b> ${promedio(series)}`;

function mostrarTablaSeries(datosSeries: Serie[]): void {
    let seriesTbody: HTMLElement = document.createElement("tbody");
        for (let serie of datosSeries) {
            let trElement: HTMLElement = document.createElement("tr"); 
            trElement.addEventListener("click", () => mostrarInfo(serie));
            trElement.classList.add("table-light");
            trElement.innerHTML = `<td>${serie.id}</td>
            <td>${serie.nombre}</td>
            <td>${serie.canal}</td>
            <td>${serie.temporadas}</td>`;
            seriesTbody.appendChild(trElement);
        }
    seriesTable.appendChild(seriesTbody);
}


function promedio(series: Serie[]): number {
    let sum: number = 0;
    series.forEach(serie => {
        sum += serie.temporadas;
    });
    return sum / series.length;
}


function mostrarInfo(serie: Serie): void {
    seriesInfo.innerHTML = `
        <div class="card" style="width: 19rem;">
        <img class="card-img-top" src="${serie.imagen}"  height: auto;">
            <div class="card-body">
                <h1 class="card-title" style="font-size:larger">${serie.nombre}</h1>   
                <p>${serie.descripcion}</p>
                <p> <a href="${serie.link}" target="_blank">${serie.link}</a></p>
            </div>
        </div>
    `;
}



