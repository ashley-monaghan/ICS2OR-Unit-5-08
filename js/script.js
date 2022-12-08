// Copyright (c) 2022 Ashley Monaghan All rights reserved
//
// Created by: Ashley Monaghan
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2OR-Unit-5-08/sw.js", {
    scope: "/ICS2OR-Unit-5-08/",
  })
}

/**
 * This function does multiplication.
 */
function myButtonClicked() {
  var numA = parseFloat(document.getElementById("firstInputedNumber").value)
  var numB = parseFloat(document.getElementById("secondInputedNumber").value)
  var remainder = 0
  var counter = 0

  while (counter > Math.abs(numB)) {
    remainder = remainder - Math.abs(numB)
    counter++
  }

  document.getElementById("remainder").innerHTML =
    "The remainder is: " + remainder
}
