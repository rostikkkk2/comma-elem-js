var arr = ["cot", "rost", "post", "slon"];
var i = 0;
var elems = "";

while (i < arr.length) {
  if (arr[i] != arr[arr.length -1]) {
    elems += arr[i] + " , ";
  }else{
    elems = elems + arr[arr.length -1];
  }
  i++;
}

alert(elems);
