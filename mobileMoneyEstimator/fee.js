function estimateTransactionFee(amountToSend){
    const percentageFee = 0.015;

    let fee = amountToSend * percentageFee
    if (fee < 10){
        fee =10;
    }else if (fee > 70){
        fee = 70;
    }

    let totalAmount = amountToSend + fee;

    console.log(`Transaction amount: KES ${amountToSend}`);
    console.log(`Transaction fee: KES ${fee}`);
    console.log(`Total amount debited: KES ${totalAmount}`);


}
let userInput = prompt("Enter the amount you wish to send (KES)");
let amount = Number(userInput);

estimateTransactionFee(amount)