function getFromServer() {
  var requestOptions = {
    method: "GET",
    // redirect: "follow",
  };

  fetch("http://localhost:3000/customer/all", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      var text = "<ul>";
      data.forEach(function (item) {
        text += `<li>
        email: ${item.email} <br>
        name: ${item.name} <br>
        pwd: ${item.pwd}
        </li>`;
      });
      text += "</ul>";
      document.getElementById("mypanel").innerHTML = text;
    })
    .catch((error) => console.log("error", error));
}

function searchShopOrderData() {
  var requestOptions = {
    method: "GET",
    // redirect: "follow",
  };

  fetch("http://localhost:3000/customer/email?cid=" + form.cemail1.value)
    .then((response) => response.json())
    .then((data) => {
      var text = "<ul>";
      data.forEach(function (item) {
        text += `<li>
        Customer name: ${item.cn} <br>
        Order ID: ${item.id} <br>
        Item Name: ${item.name} <br>
        Quantity: ${item.quantity}
        </li>`;
      });
      text += "</ul>";
      document.getElementById("mypanel").innerHTML = text;
    })
    .catch((error) => console.log("error", error));
}


/* function searchShopOrderData() {
  var requestOptions = {
    method: "GET",
  };
  url = "http://localhost:3000/customer/email?cid=" + form.cemail1.value;
  console.log(url);
  fetch(url, requestOptions)
    .then((response) => response.text())
    .then((result) => (document.getElementById("mypanel").innerHTML = result))
    .catch((error) => console.log("error", error));
}
*/






function postData() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  respanel = document.getElementById("mypanel");

  // Populate this data from e.g. form.
  var raw = JSON.stringify({
    nemail: form.nemail.value,
    nname: form.nname.value,
    npwd: form.npwd.value,
  });

  console.log(raw);
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  fetch("http://localhost:3000/customer/add", requestOptions)
    .then((response) => response.text())
    .then((result) => (respanel.innerHTML = result))
    .catch((error) => console.log("error", error));
}


function updatePass() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  respanel = document.getElementById("mypanel");

  // Populate this data from e.g. form.
  var raw = JSON.stringify({
    cemail: form.cemail.value,
    cpwd: form.cpwd.value,
  });

  console.log(raw);
  var requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
  };

  fetch("http://localhost:3000/customer/changepass", requestOptions)
    .then((response) => response.text())
    .then((result) => (respanel.innerHTML = result))
    .catch((error) => console.log("error", error));
}


function deleteCust() {
  var requestOptions = {
    method: "DELETE",
  };
  url = "http://localhost:3000/customer/delete?cid=" + form.demail.value;
  fetch(url, requestOptions)
    .then((response) => response.text())
    .then((result) => (document.getElementById("mypanel").innerHTML = result))
    .catch((error) => console.log("error", error));
}

/*function custLogin() {
  var requestOptions = {
    method: "GET",
  };
  url = "http://localhost:3000/customer/login?lemail=" + form.lemail.value + "&lpwd=" + form.lpwd.value;
  console.log(url);
  fetch(url, requestOptions)
    .then((response) => response.text())
    .then((result) => (document.getElementById("mypanel").innerHTML = result))
    .catch((error) => console.log("error", error));
}
*/

function custLogin() {
  var requestOptions = {
    method: "GET",
    // redirect: "follow",
  };

  fetch("http://localhost:3000/customer/login?lemail=" + form.lemail.value + "&lpwd=" + form.lpwd.value)
    .then((response) => response.json())
    .then((data) => {
      var text = "<ul>";
      data.forEach(function (item) {
        text += `<li>
        Customer name: ${item.cn} <br>
        Order ID: ${item.id} <br>
        Item Name: ${item.name} <br>
        Quantity: ${item.quantity}
        </li>`;
      });
      text += "</ul>";
      document.getElementById("mypanel").innerHTML = text;
    })
    .catch((error) => console.log("error", error));
}


/*function custLogin() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  respanel = document.getElementById("mypanel");

  // Populate this data from e.g. form.
  var raw = JSON.stringify({
    lemail: form.lemail.value,
    lpwd: form.lpwd.value,
  });

  console.log(raw);
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    body: raw,
  };

  fetch("http://localhost:3000/customer/login", requestOptions)
  .then((response) => response.json())
  .then((data) => {
    var text = "<ul>";
    data.forEach(function (item) {
      text += `<li>
      Customer name: ${item.cn} <br>
      Order ID: ${item.id} <br>
      Item Name: ${item.name} <br>
      Quantity: ${item.quantity}
      </li>`;
    });
    text += "</ul>";
    document.getElementById("mypanel").innerHTML = text;
  })
  .catch((error) => console.log("error", error));
}
*/



