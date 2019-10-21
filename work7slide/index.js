function sort(method){
    //读取排序数据
    let origin = document.getElementById('origin').value
    let logs
    console.log(method)
    //根据传入排序的方法调用不同的排序函数
    if(method=='bubble'){
        logs = bubbleSort(origin)
    }else if(method=='insert'){
        logs = insertSort(origin)
    }
    showDiv = document.getElementById('Anim')
    logValues = logs.values()
    console.log(logValues.next())
    setTimeout("showLog(logValues,showDiv)",50)
    showDiv.innerHTML = logs
}