const fullName = document.getElementById('fullName');
const age = document.getElementById('age');
const accountType = document.getElementById('accountType');
const fbalance = document.getElementById('fbalance');
const deposit = document.getElementById('deposit');
const withdrawal = document.getElementById('withdrawal');
const btn = document.getElementById('btn');
const disName = document.getElementById('disName');
const disAge = document.getElementById('disAge');
const disBalance = document.getElementById('disBalance');


function createAccount() {

 const account = { 
    deposit(depositAmount) {
    this.Balance = Number(this.Balance) + Number(depositAmount);
 },

 withdrawal(withdrawalAmount) {
    this.Balance = Number(this.Balance) - Number(withdrawalAmount);
 },


 }

if(accountType.value === 'saving') {

 alert(`hello ${fullName.value} your account has been created`)
const saving = Object.create(account);
saving.Name = fullName.value;
saving.Age = age.value
saving.Balance = fbalance.value;
saving.deposit(deposit.value);
saving.withdrawal(withdrawal.value);

// for the input
disName.textContent = `NAME:${saving.Name}`;
disAge.textContent = `AGE:${saving.Age}`;
disBalance.textContent = `BALANCE:${saving.Balance}`;

fullName.value = '';
age.value = '';
accountType.value = '';
fbalance.value = '';
deposit.value = '';
withdrawal.value = '';

}
 
 
if(accountType.value === 'current') {
  alert(`hello ${fullName.value} your account has been created`)
  const current = Object.create(account);
  current.Name = fullName.value;
current.Age = age.value
current.Balance = fbalance.value;
current.deposit(deposit.value);
current.withdrawal(withdrawal.value);

// for the input
disName.textContent = `NAME:${current.Name}`;
disAge.textContent = `AGE:${current.Age}`;
disBalance.textContent = `BALANCE:${current.Balance}`;

fullName.value = '';
age.value = '';
accountType.value = '';
fbalance.value = '';
deposit.value = '';
withdrawal.value = '';

}
 
 

}

btn.addEventListener('click', createAccount)