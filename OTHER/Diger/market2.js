//Select DOM

const pageItems = document.getElementsByClassName("page-items");

//Event Listeners

document.addEventListener('DOMContentLoaded', 
pageList(productList[0].productName,productList[0].price, productList[0].productImage));
//Functions

function pageList (p1, p2, p3){

const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");

todoDiv = `<table class="table caption-top">
<caption>List of users</caption>
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">${p1}</th>
    <th scope="col">${p2}</th>
    <th scope="col">${p3}</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th scope="row">1</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
  </tr>
  <tr>
    <th scope="row">2</th>
    <td>Jacob</td>
    <td>Thornton</td>
    <td>@fat</td>
  </tr>
  <tr>
    <th scope="row">3</th>
    <td>Larry</td>
    <td>the Bird</td>
    <td>@twitter</td>
  </tr>
</tbody>
</table>`;

todoDiv.appendChild(pageItems);

}


<td>${p2}</td>
<td>${p3}</td>
<td>${p4}</td>
<td>${p5}</td>
