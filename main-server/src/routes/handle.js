"use strict"
// const { Route } = require("express")
// const { Router } = require("express")
const express = require("express")

const displayData = require("./display")
const createData = require("./create")
const editData = require("./edit")
const deleteData = require("./delete")

let router = express.Router()

router.use("/display", displayData)
router.use("/create", createData)
router.use("/edit", editData)
router.use("/delete", deleteData)

module.exports = router
