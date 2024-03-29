import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 2096;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code");
    let operationAns = await inquirer.prompt([
        {
            name: "operations",
            message: "select one option",
            type: "list",
            choices: ["withdraw", "check balance"],
        },
    ]);
    console.log(operationAns);
    if (operationAns.operations === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        myBalance -= amountAns.amount;
        console.log("your remaining balance is:  " + myBalance);
    }
    else if (operationAns.operations === "check balance") {
        console.log("your balance is: " + myBalance);
    }
}
else {
    console.log("Incorrect pin code!");
}
