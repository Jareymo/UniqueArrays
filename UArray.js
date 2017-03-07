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