const express = require("express")
const router = require("./routes")

const app = express()
const PORT =  8601

app.set("view engine", "ejs")
app.set("views", "./src/views")

app.use(express.static("public"))
app.use("/", router)

app.listen(PORT, () => console.log(`[server]: running on port ${PORT}`))