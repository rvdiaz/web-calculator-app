export const getResult=(op1,op2,operation)=>{
    switch (operation) {
        case '÷':
            return op1/op2;
            break;
        case '-':
            return op1-op2;
            break;
        case 'x':
            return op1*op2;
            break;
        default:
            return op1+op2;
            break;
    }
}