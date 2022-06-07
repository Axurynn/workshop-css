let arr = [];

function fibonacci(nbr) {
  let n1 = 0;
  let n2 = 1;
  let somme = 0;
  let b = 0;

  for (let i = 2; i <= nbr; i++) {
    somme = n1 + n2;
    n1 = n2;
    n2 = somme;

    b = nbr ? n2 : n1;
    arr.push(b);
  }
  return arr;
}

function generateTable(tbody, array) {
  for (let i = 0; i < array.length; i++) {
    let row = table.insertRow();
    let cell1 = row.insertCell();
    let cell2 = row.insertCell();
    let num = document.createTextNode(i + 1);
    let text = document.createTextNode(array[i]);
    cell1.appendChild(num);
    cell2.appendChild(text);
  }
}

arr = fibonacci(13);
let table = document.querySelector(".corps");
generateTable(table, arr);
