/* Turns arrays into arrays with Unique Values
 *
 * Use: Call the function, pass the array with duplicate values to the funcion and save the value in another variable.
 * 
 * In example: var uArray = arrayToUArray(oldArray);
 * 
 * By: José Rey
 */

function arrayToUArray(_array)
{
    var _newArray = [];

    for(var i=0;i<_array.length;i++)
    {
        if(!_newArray.includes(_array[i]))
        {
            _newArray.push(_array[i]);
        }
    }

    return _newArray;
}
