//HOME WORK-4
//1-Task
const d = 5;
const z = 10;

    if(d < z){
        console.log(d + '-менше за-' + z);
        console.log(z + '-більше за-' + d);
    }
    else{
        console.log('error');
    };
//2-Task
const fut = 0.305;
const kilometr = 1000;

    if(fut < kilometr){
        console.log('Відстань у футах менша за кілометр');
    }
    else if(kilometr < funt){
        console.log('Відстань у футах більше за кілометр');
    }
    else{
        console.log('Відстані однакові');
    };
//Task-3
const a = 40;
const b = 4;
//ділення присвоюємо змінній безпосередньо(без умов. оператора)
//let sum1 = a / b;
//let sum2 = b / a;

    if(a % b == 0){
        console.log(a + ' ' + 'це дільник' + ' ' + b);
    }
    else{
        console.log(a + ' ' + 'це не дільник' + ' ' + b);
    }
 //console.log(sum1);   
//console.log(sum2);

//Task-4
const num = 33;
const lastNum = num % 10;
    if(num % 2 === 0){
        console.log(`The last digit ${num} is even`);
    }
    else{
        console.log(`The last digit ${num} is't even`);
    };
console.log(lastNum);

//Task-5
const numeral = 38;
const firstNum = Math.floor(numeral / 10);
const secondNum = numeral % 10;
    if(firstNum < secondNum){
        console.log(secondNum);
    }
    else if(secondNum < firstNum){
        console.log(firstNum);
    }
    else{
        console.log(firstNum, secondNum);
    };

//Task-6
const data = 357;
const sumData = (3 + 5 + 7);
const amountData = sumData / 5;

    if(sumData % 2 === 0){
        console.log(`The sum ${sumData} of the numbers is even`);
    }
    else{
        console.log(`The sum ${sumData} of the numbers is not even`);
    };
        console.log(`Amount is a multiple ${amountData}`);

const productNum1 = Math.floor(data / 10);
const productNum2 = data % 10;
const productNum3 = (data % 10) % 10;
const sumProduct = productNum1 * productNum2 * productNum3;

sumProduct > 100
    ?console.log(`${sumProduct} - more 100`)
    :console.log(`${sumProduct} - less 100`); 

//Task-7
const count = 355;
const firstCount = Math.floor(count / 10);
const secondCount = count % 10;
const thirdCount = (count % 10) % 10;

    if(firstCount === secondCount && firstCount === thirdCount && secondCount === thirdCount){
        console.log('Однакові всі числа');
    }
        console.log('Не однакові всі числа ');
    
    if(firstCount === secondCount || firstCount === thirdCount || secondCount === thirdCount){
        console.log('Серед цифр є цифри однакові!');
    };

//Task-8
let amount1 = '123321';

for(let i = 0; i < amount1.length; i++){
    if(amount1[i] === amount1[amount1.length - 1 - i]){
        console.log('Число дзеркальне');
    }
    else{
        console.log('Число не дзеркальне');
    }
};
let amount2 = '147741';

for(let i = 0; i < amount2.length; i++){
    if(amount2[i] === amount2[amount2.length - 1 - i]){
        console.log('Число дзеркальне');
    }
    else{
        console.log('Число не дзеркальне');
    }
};



