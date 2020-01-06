// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/
import {music} from './music';

// \/ All of your javascript should go here \/
var tbody = document.querySelector("tbody")
var count = 0
music.forEach(element=>{
    const content = ` <tr>
    <th scope="row">${++count}</th>
    <td class="NAME"><img src=${element.artworkUrl60}></td>
    <td class="ARTIST">${element.trackName}</td>
    <td class="ALBUM">${element.collectionName}</td>
    <td class="TIME"></td>
    <td class="POPULARITY"></td>
    <td class="PRICE">${element.trackPrice} $</td>
  </tr>` 
tbody.insertAdjacentHTML("beforeend",content)
}
)
$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });