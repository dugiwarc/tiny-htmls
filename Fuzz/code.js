window.addEventListener("load", function() {
  var nodes = document.querySelectorAll(".fuzz");
  nodes.forEach(node => {
    var newNode = document.createElement("span");
    newNode.innerText = node.innerText;
    node.appendChild(newNode);
  });
});
