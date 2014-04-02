// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:


function stringifyJSON (obj) {
    
    if (obj === null) {
      return 'null';
    }
	else if (typeof obj === 'string') {
      return '"' + obj + '"';
    }

	else if (Array.isArray(obj)) {
      var isArr = [];
      _.each(obj, function(element, key) {
		    isArr.push(stringifyJSON(element));
      });
      return '[' + isArr.toString() + ']';
    }

	else if (typeof obj === 'object') {
      var isObj = [];
      _.each(obj, function(element, key) {
		if (typeof element !== 'function') {
	    	if (typeof element !== 'undefined') {
				isObj.push(stringifyJSON(key) + ':' + stringifyJSON(element));		
			}
		}
      });
      return '{' + isObj.toString() + '}';
    }

    else {
      return obj.toString();
	}

};

