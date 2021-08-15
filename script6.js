function moreThanHunderd(number){
    if (number>100){
        return true
    }
    else{
        return false
    }
}

function bouncer(max, current, age){
    if (max<current){
        return "it's too busy now, come back later"
    }
    else if(age<18){
        return "this is a club for adults"
    }
    else{
        return "come in"
    }
}


bouncer(10, 9, 7)
bouncer (10, 11, 19)
bouncer (100, 5, 20 )

function average(number1, number2, number3, number4, number5){
    return Math.round((number1+number2+number3+number4+number5)/5)
}

average(10, 9, 2, 5, 6)