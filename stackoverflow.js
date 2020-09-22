var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    myArr = JSON.parse(this.responseText);

    stack = document.getElementById('stack');

    var obj = myArr.items[0].badge_counts;
    i = 0;
    for (var key in obj) {
      column = document.createElement('div');
      column.classList.add("contrib-column", "table-column");

      span1 = document.createElement('span');
      span1.classList.add("text-muted");

      span2 = document.createElement('span');
      span2.classList.add("contrib-number");

      textnode = document.createTextNode(key);
      textnode2 = document.createTextNode(obj[key]);

      span1.appendChild(textnode);
      span2.appendChild(textnode2);

      span1.appendChild(textnode);
      column.appendChild(span1);
      column.appendChild(span2);
      stack.appendChild(column);

    }


    ee = document.getElementById('repu')
    repu = document.createTextNode(myArr.items[0].reputation)
    ee.appendChild(repu)
    // bronze = myArr.items[0].badge_counts.bronze;

    // document.getElementById('output').innerHTML = bronze;

  }
  // document.getElementById("myList").innerHTML = myArr.items[5].family;
}
xmlhttp.open("GET",
   `https://api.stackexchange.com/2.2/users/${user_id}?order=desc&sort=reputation&site=stackoverflow`,
  true);
xmlhttp.send();