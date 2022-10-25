// Copyright (c) 2022 Youngwook All rights reserved
//
// Created by: Youngwook
// Created on: OCT 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-01-PWA1/sw.js", {
    scope: "/ICS2O-Unit6-01-PWA1/",
  })
}

/**
 * This function displays an alert.
 */

function submit() {
  // input
  const numberOfHours = parseFloat(
    document.getElementById("worked-hours").value
  )
  const hourlyRate = parseFloat(document.getElementById("hourly-rate").value)
  const TAX_RATE = 0.18

  // process
  const governmentTake = numberOfHours * hourlyRate * TAX_RATE
  const homePay = numberOfHours * hourlyRate - governmentTake

  // output
  document.getElementById(
    "homePay"
  ).innerHTML = `Your pay will be: $ ${homePay.toFixed(2)}`
  document.getElementById(
    "governmentTake"
  ).innerHTML = `Your government took: $ ${governmentTake.toFixed(2)}`
}
