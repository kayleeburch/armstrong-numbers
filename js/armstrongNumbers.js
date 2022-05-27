// How can you make this more scalable and reusable later?

exports.findArmstrongNumbers = function(arr) {
    let result = []
    for(let i = 0; i < arr.length; i++) {
        let total = 0
        let toStr = arr[i].toString()
        console.log(toStr)
        for(let j = 0; j < toStr.length; j++) {
            let strNum = toStr[j]
            total += Math.pow(parseInt(strNum), toStr.length)
            
        }
        if(total === arr[i]){
            result.push(arr[i])
        }
    }

    console.log(result)
};
