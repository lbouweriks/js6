const ageCheck=age=>{
    if (age>=18) return true
    else return false    
}

const adult=(age)=>{
    if(ageCheck(age))return "Hello there"
    else return "Hey kiddo"
}

const vatCalculator=(price, vat)=>{
    const vatCalculation=addVat(price, vat)
    return "The total price is E"+(price+vatCalculation)+". The VAT is E" +vatCalculation
}

const addVat=(price, vat)=> {
    return price*(vat/100)
}

console.log(vatCalculator(100, 21))

const vatCalculator2=(price,vat)=>{
    const addedVat=removeVat(price, vat)
    return "the VAT on this product is E" +addedVat+ ". The original price is E" +(price-addedVat) 
}

const removeVat=(price, vat)=>{
    return price/(1+(vat/100))
}


console.log(vatCalculator2(121, 21))
