var arr = ["cot", "rost", "post", "slon"];

var i = 0;
var elems = "";
var final_res = "";
var last_el = arr[arr.length -1];

while (i < arr.length) {
  if (arr[i] != last_el) {
    elems += arr[i] + " , ";
  }else{
    final_res = elems + last_el;
  }
  i++;
}

alert(final_res);
