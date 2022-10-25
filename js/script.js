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
  const base = parseInt(document.getElementById("base-value").value)
  const height = parseInt(document.getElementById("height-value").value)

  // process
  const area = (base * height) / 2

  // output
  document.getElementById("area").innerHTML = " The area is : " + area + " ㎠ "
}
