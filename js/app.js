var prog1 = [];
prog1["Name"] = "Matz";

var prog2 = [];
prog2["Name"] = "Ada";

var prog3 = [];
prog3["Name"] = "Mark";

var progs = [prog1, prog2, prog3];

function displayProgs() {
  
  var n = progs.length;
  
  var ResultsDiv = document.getElementById('resultsDiv');

  //iterate over employees to get each employee
  for(var i = 0; i < n; i++) {

    var emp = progs[i];

    //iterate over employee to get each key/value
    for(var key in emp) {
      
      var ChildDiv = document.createElement('div');
      ChildDiv.innerHTML = key + ": " + emp[key];
      ResultsDiv.appendChild(ChildDiv);
    }
    //add break for better display
    var ChildBr = document.createElement('br');
    ResultsDiv.appendChild(ChildBr);
  }
};


