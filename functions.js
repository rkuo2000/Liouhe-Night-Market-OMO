function calculate() {
  const ele = document.getElementsByTagName('input');
  let table = document.getElementById("myTable");
  let tr = table.getElementsByTagName("tr");
  let subTotal = 0;
  for (var i = 0; i < ele.length; i++) {
    let td = tr[i].getElementsByTagName("td")[1];
    let price = parseFloat(td.innerText); // change here
    if (ele[i].type == 'checkbox' && ele[i].checked == true)
      subTotal += price;
  }
  document.getElementById("val").innerHTML = "The subtotal is " + subTotal.toFixed(2); // and set precision here
}
