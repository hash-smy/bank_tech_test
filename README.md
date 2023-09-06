# Bank Tech Test README
This README provides an overview and guidance for the Bank Tech Test. This test is designed to help you practice your Object-Oriented (OO) design and Test-Driven Development (TDD) skills. You'll have the opportunity to work on a simple banking system with minimal time pressure.

# Preview
Code: You will write code to implement the banking system.

# Specification
# Requirements
Your task is to create a simple banking system that allows for deposits, withdrawals, and printing account statements. Here are the key requirements:

1.You should be able to interact with your code via a REPL (Read-Eval-Print Loop) like IRB or Node. You do not need to implement a command-line interface that takes input from STDIN.

2.The system should support deposits and withdrawals.

3.It should provide functionality to print an account statement, including the date, amount, and balance for each transaction.

4.Data can be kept in memory; you do not need to store it in a database.

# Acceptance Criteria
To verify that your code meets the requirements, there are specific acceptance criteria to consider. Given a series of client transactions:

On 10-01-2023, a client makes a deposit of 1000.
On 13-01-2023, a client makes a deposit of 2000.
On 14-01-2023, a client makes a withdrawal of 500.
When the client prints their bank statement, it should display the following:


date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00


# Getting Started
To get started with the Bank Tech Test, you can follow these steps:

Clone this repository to your local machine.

Set up your development environment:

//Setup our environment to use node latest version
$ nvm use node

//Initialise the NPM project (this will create a file package.json)
$ npm init -y

// Add the jest package to our project
//(this will update package.json and package-lock.json)
$ npm add jest

// Also install jest "globally"
// (this is so we can run the `jest` command)
$ npm install -g jest

//Run our tests
$ jest




