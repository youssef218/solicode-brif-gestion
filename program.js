let i = 0;
document.getElementById("btn").onclick = function () {
  i++;
  let nome = document.getElementById("Nom").value;
  let mark = document.getElementById("marke").value;
  let prix = document.getElementById("prix").value;
  let dat = document.getElementById("dat").value;
  let typ = document.getElementById("types").value;
  let promo = document.querySelector("input[name='color']:checked");
  const row = document.createElement("tr");
  row.id = `e${i}`;
  const colom7 = document.createElement("td");
  const colom1 = document.createElement("td");
  const colom2 = document.createElement("td");
  const colom3 = document.createElement("td");
  const colom4 = document.createElement("td");
  const colom5 = document.createElement("td");
  const colom6 = document.createElement("td");
  document.getElementById("tbl").appendChild(row);
  row.appendChild(colom1);
  colom1.innerHTML = nome;
  row.appendChild(colom2);
  colom2.innerHTML = mark;
  row.appendChild(colom3);
  colom3.innerHTML = prix;
  row.appendChild(colom4);
  colom4.innerHTML = dat;
  row.appendChild(colom5);
  colom5.innerHTML = typ;
  row.appendChild(colom6);
  if (promo == null) {
    colom6.innerHTML = " ";
  } else {
    colom6.innerHTML = promo.value;
  }
  row.appendChild(colom7);
  colom7.innerHTML = `<button style='margin: 5px;'  onclick='tkl(${i})'><i class='fa-regular fa-circle-xmark'></i></button><button  onclick='tkll(${i})'><i class='fa-solid fa-pen'></i></button>`;
  document.getElementById("form").reset();

  // var coll = document.querySelectorAll(".cld");
  // var m;
  // nextElementSibling
};
function tkl(i) {
  // console.log(document.getElementById(`e${i}`));
  document.getElementById(`e${i}`).remove();
}

function tkll(i) {
  // let nome = document.getElementById("tbl").rows[i].cells[0].innerHTML;
  // let mark = document.getElementById("tbl").rows[i].cells[1].innerHTML;
  // let prix = document.getElementById("tbl").rows[i].cells[2].innerHTML;
  // let dat = document.getElementById("tbl").rows[i].cells[3].innerHTML;
  // let typ = document.getElementById("tbl").rows[i].cells[4].innerHTML;
  // let promo = document.getElementById("tbl").rows[i].cells[5].innerHTML;

  let nome = document.getElementById(`e${i}`).cells[0].innerHTML;
  let mark = document.getElementById(`e${i}`).cells[1].innerHTML;
  let prix = document.getElementById(`e${i}`).cells[2].innerHTML;
  let dat = document.getElementById(`e${i}`).cells[3].innerHTML;
  let typ = document.getElementById(`e${i}`).cells[4].innerHTML;
  let promo = document.getElementById(`e${i}`).cells[5].innerHTML;
  document.getElementById("Nom").value = nome;
  document.getElementById("marke").value = mark;
  document.getElementById("prix").value = prix;
  document.getElementById("dat").value = dat;
  document.getElementById("types").value = typ;
  //  if(promo=="non"){
  //   document.querySelector("input[name='color']:checked").checked;
  //  }

  if (promo == "non") {
    document.getElementById("non").checked = true;
  } else if (promo == "Oui") {
    document.getElementById("Oui").checked = true;
  } else {
    document.getElementById("Oui").checked = false;
    document.getElementById("non").checked = false;
  }
  document.getElementById("sav").style.display = "block";

  document.getElementById("sav").onclick = function () {
    let nome = (document.getElementById(`e${i}`).cells[0].innerHTML =
      document.getElementById("Nom").value);
    let mark = (document.getElementById(`e${i}`).cells[1].innerHTML =
      document.getElementById("marke").value);
    let prix = (document.getElementById(`e${i}`).cells[2].innerHTML =
      document.getElementById("prix").value);
    let dat = (document.getElementById(`e${i}`).cells[3].innerHTML =
      document.getElementById("dat").value);
    let typ = (document.getElementById(`e${i}`).cells[4].innerHTML =
      document.getElementById("types").value);
    // let promo = document.getElementById("tbl").rows[i].cells[5].innerHTML;
    if (document.querySelector("input[name='color']:checked") == null) {
      document.getElementById(`e${i}`).cells[5].innerHTML = " ";
    } else {
      document.getElementById(`e${i}`).cells[5].innerHTML =
        document.querySelector("input[name='color']:checked").value;
    }
    document.getElementById("form").reset();
    document.getElementById("sav").style.display = "none";
  };
   
}

document.getElementById('sup').onclick =function(){
  const list = document.getElementById("tbl");
  for(let m=0;m<=document.getElementsByTagName('tr').length*9;m++){
    if (list.hasChildNodes()) {
      list.removeChild(list.children[1]);
    }
  
}
}