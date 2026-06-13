const { Router } = require("express");

const indexRouter = Router();
const messages = [
  {
    text: "Hi there!",
    user: "Armando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charlie",
    added: new Date()
  }
];

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages })
})
indexRouter.get("/new", (req, res) => {
  res.render("form", { title: "New Message" })
})
indexRouter.post("/new", (req, res) => {
  const message = req.body.message;
  const author = req.body.author;
  messages.push({ text: message, user: author, added: new Date() });
  res.redirect("/")
})
indexRouter.get("/:messageId", (req, res) => {
  const id = req.params.messageId;
  res.render("detail", { message: messages[id]})
})

module.exports = indexRouter