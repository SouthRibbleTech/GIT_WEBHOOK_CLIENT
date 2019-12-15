const express = require('express')
// const git = require('simple-git/promise')
const shell = require('shelljs')
require('dotenv').config()


const app = express()
const port = 3888

app.post('/api/git', (req, res)=>{
    // const USER = process.env.GIT_USER
    // const PASS = process.env.GIT_PASS
    // const API_REPO_URL = process.env.API_REPO_URL
    // const remote = `https://${USER}:${PASS}@${API_REPO_URL}`
    // git(process.env.API_DIR).silent(true)
    // .pull(remote,'master')
    // .then(()=>console.log("Pulled API Repo"))
    // .catch((err)=>console.log("Error pulling API repo", err))
    let childProc = shell.exec(process.env.API_BUILD_SCRIPT, {async:true})
    childProc.stdout.on('data', (data)=>{
        // console.log(data)
    })
    return res.status(200).send("ok")
})

app.listen(port, ()=>console.log(`Express listening on port ${port}.`))