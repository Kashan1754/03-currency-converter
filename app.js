import inquirer from "inquirer";
let conversion = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0029,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.25,
        "PKR": 345.61,
        "GBP": 1
    },
    "USD": {
        "GBP": 0.80,
        "PKR": 277.60,
        "USD": 1
    }
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "GBP", "USD"],
        message: "Select your currency...?"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "GBP", "USD"],
        message: "Select your conversion currency"
    },
    {
        type: "number",
        name: "amount",
        message: "Select your conversion amount"
    }
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = conversion[from][to] * amount;
    console.log(`your conversion from ${from} to ${to} is ${result}`);
}
else {
    console.log("invalid inputs");
}
