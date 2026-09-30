function add() {
   let num1 = Number(document.querySelector("#num1").value)
   let num2 = Number(document.querySelector("#num2").value)
   let num1_error = document.querySelector("#num1_error")
   let num2_error = document.querySelector("#num2_error")
   if (num1 === 0) {
      num1_error.classList.remove("hidden");
      //document.querySelector("#num1_error").textContent="Enter 1st number";
      return;
   }
   if (num2 === 0) {
      num2_error.classList.remove("hidden");
      //document.querySelector("#num2_error").textContent="Enter 2nd number";
      return;
   }
   num1_error.classList.add("hidden");
   num2_error.classList.add("hidden");
   document.querySelector("#result").textContent = num1 + num2
}



function subtract() {
   let num1 = Number(document.querySelector("#num1").value)
   let num2 = Number(document.querySelector("#num2").value)
   let num1_error = document.querySelector("#num1_error")
   let num2_error = document.querySelector("#num2_error")
   if (num1 === 0) {
      num1_error.classList.remove("hidden");
      //document.querySelector("#num1_error").textContent="Enter 1st number";
      return;
   }
   if (num2 === 0) {
      num2_error.classList.remove("hidden");
      //document.querySelector("#num2_error").textContent="Enter 2nd number";
      return;
   }
   num1_error.classList.add("hidden");
   num2_error.classList.add("hidden");
   result = document.querySelector("#result").textContent = num1 - num2
}



function multiply() {
   let num1 = Number(document.querySelector("#num1").value)
   let num2 = Number(document.querySelector("#num2").value)
   let num1_error = document.querySelector("#num1_error")
   let num2_error = document.querySelector("#num2_error")
   if (num1 === 0) {
      num1_error.classList.remove("hidden");
      //document.querySelector("#num1_error").textContent = "Enter 1st number";
      return;
   }
   if (num2 === 0) {
      num2_error.classList.remove("hidden");
      //document.querySelector("#num2_error").textContent = "Enter 2nd number";
      return;
   }
   num1_error.classList.add("hidden");
   num2_error.classList.add("hidden");
   document.querySelector("#result").textContent = num1 * num2
}



function divide() {
   let num1 = Number(document.querySelector("#num1").value)
   let num2 = Number(document.querySelector("#num2").value)
   let num1_error = document.querySelector("#num1_error")
   let num2_error = document.querySelector("#num2_error")
   if (num1 === 0) {
      num1_error.classList.remove("hidden");
      document.querySelector("#num1_error").textContent = "Enter 1st number";
      return;
   }
   if (num2 === 0) {
      num2_error.classList.remove("hidden");
      document.querySelector("#num2_error").textContent = "2nd number cannot be 0";
      return;
   }
   num1_error.classList.add("hidden");
   num2_error.classList.add("hidden");
   document.querySelector("#result").textContent = num1 / num2;

}
