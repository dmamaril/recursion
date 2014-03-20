var getElementsByClassName = function (className, nodes) {
  // store passing elements
  var result = [];

  // if nodes is not declared, nodes = document body;
  if (!nodes) {
  	nodes = document.body;
  }

  // Grab all nodes of document.Body & iterate through;
  // document.body.childNodes[classCheck];
  _.each(nodes.childNodes, function (classCheck) {
  
    // Check classList to match className & push to result;
    // document.body.childNodes[classCheck].classList == className
  	_.each(classCheck.classList, function(element) {
  		if(element == className) {
  			result.push(classCheck);
  		}
  	});

  	// Run getElementsByClassName for inner childNodes
  	// document.body.childNodes[classCheck].childNodes
  	if(classCheck.childNodes) {
  		result = _.union(result, getElementsByClassName(className, classCheck));
  	}
  });

  return result;

  
};
