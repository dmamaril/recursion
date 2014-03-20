// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:

function stringifyJSON (obj) {
    var result;
    if (typeof obj !== 'function' || typeof obj !== 'undefined') {

        if (typeof obj === 'null') {
            result = 'null';
        } 


          else if (typeof obj === 'string') {
            result = '"' + obj + '"';
        } 


          else if (Array.isArray(obj)) {
            var isArr = [];
            _.each(obj, function(element) {
                isArr.push(stringifyJSON(element));
            });
            result = '[' + isArr.toString() + ']';
        }


          else if (typeof obj === 'object') {
            var isObj = [];
            _.each(obj, function(element, key) {
                isObj.push(stringifyJSON(key) + ':' + stringifyJSON(element));
            });
            console.log(isObj);
            result =  '{' + isObj.toString() + '}';
        }


          else {
            result = obj.toString();
         }

    };
    return result;
};

// including missing variables for SpecRunner.html
var arrayWithValidElements = [true,'false',42];
var objectWithInvalidAttributes = {x: 5, y: 6};
