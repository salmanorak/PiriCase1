function findDublicateWithFilter(arr){
    if(Array.isArray(arr)){
        var l = arr.length;
        for(var i=0; i<l; i++){
            if(arr.indexOf(arr[i]) != i ) return arr[i];
        }
        return -1;
    }
    return 'parametere is not Array'
}

function findDublicateWithIteration(arr){
    if(Array.isArray(arr)){
        var result;
        for (const [index, val] of arr.entries()){
            if(arr.indexOf(val) != index ){
                result = val;
                break;
            }
        }
       return result ? result : -1 ;
    }
    return 'parametere is not Array'
}

findDublicateWithIteration([1,2,3]) // return -1
findDublicateWithIteration([1,2,2,3,3]) // return 2

findDublicateWithFilter([1,2,3]) // return -1
findDublicateWithFilter([1,2,2,3,3]) // return 2
