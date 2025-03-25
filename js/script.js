// Copyright (c) 2020 Mr. Coxall All rights reserved
// Created by: yi.zhou
// Created on: Mar 2025
// This file contains the JS functions for index.html

"use strict"

function CalucalteTaxIncome() {
  // Setting the variables
  const TaxAmount = 0.18;
  let HourlyWorked = parseFloat(document.getElementById("hourly-worked").value);
  let HourlyWage = parseFloat(document.getElementById("hourly-wage").value);
  let TakeHomePay = (HourlyWorked * HourlyWage) * (1.00 - 0.18)
  let Taxes = (HourlyWorked * HourlyWage) * TaxAmount;

  // currency formatting
  let formattedPrice = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
  });

  // calculations
  document.getElementById("result").innerHTML =
    `Take-home Pay: ${formattedPrice.format(TakeHomePay)} <br>
    Taxes: ${formattedPrice.format(Taxes)}`;
}