var arr = ["cot", "rost", "post", "slon"];

var i = 0;
var elems = "";
var final_res = "";

while (i < arr.length) {
  if (arr[i] != arr[arr.length -1]) {
    elems += arr[i] + " , ";
  }else{
    final_res = elems + arr[arr.length -1];
  }
  i++;
}

alert(final_res);
