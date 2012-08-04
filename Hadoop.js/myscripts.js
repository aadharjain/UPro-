$(document).ready(function() {

    tb1Mirror = CodeMirror.fromTextArea(document.getElementById("tb1"), {
      mode: "text/javascript",
      matchBrackets: true,
      indentUnit: 4,
      lineNumbers: true,
      lineWrapping: true,
      theme: "ambiance",
      value: ""
    });

    tb2Mirror = CodeMirror.fromTextArea(document.getElementById("tb2"), {
      mode: "text/javascript",
      matchBrackets: true,
      indentUnit: 4,
      lineNumbers: true,
      lineWrapping: true,
      theme: "ambiance",
      value: ""
    });

  $("#myForm").submit(function(e) {
    e.preventDefault();
    console.log(tb1Mirror.getValue())
    console.log(tb2Mirror.getValue())
    tb1Mirror.setValue("")
    tb2Mirror.setValue("")
  })

})
