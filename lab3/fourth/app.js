var arr = [
    {value: 100, type: 'USD'},
    {value: 215, type: 'EUR'},
    {value: 7, type: 'EUR'},
    {value: 99, type: 'USD'},
    {value: 354, type: 'USD'},
    {value: 12, type: 'EUR'},
    {value: 77, type: 'USD'},
    ];

    // 1)Знайти суму всіх значень value у яких тип ‘USD’ та value менше за 100.

   let sum = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i].type == "USD" && arr[i].value < 100){
            sum = sum + arr[i].value
        }
    }
    console.log(sum);

    console.log("-------------------------------")

    //2)повернути масив всіх об’єктів з типом ‘EUR’ та для кожного об’єкту
    // подвоїти значення value;
    let arr1 = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i].type == "EUR"){
            arr[i].value = arr[i].value * 2;
            // value = arr[i].value * 2;
            arr1.push(arr[i]);
        }
    }
    console.log(arr1);
    