const bodyParser = require("body-parser");
const express = require("express");

const homeStartingContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus a magnam voluptas in molestiae nemo obcaecati laboriosam aliquid, quaerat sint. Odit eaque cumque mollitia vitae optio, odio molestias fuga ex obcaecati eveniet nulla ullam laboriosam deleniti dolore doloremque et enim repudiandae aspernatur a voluptate. Doloribus vel laudantium eius deserunt iure. Nostrum, eius? Nam quisquam dolore vitae, debitis placeat blanditiis inventore reprehenderit hic quis consectetur doloremque iste consequuntur itaque. Quo porro dicta maiores! Eveniet et suscipit neque numquam a cumque iste animi perferendis nobis quaerat dolor in tempora dignissimos amet quibusdam nisi maiores natus dolorum quo expedita quidem asperiores, eum blanditiis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde optio ipsam maiores, fugiat debitis, ratione dolores nobis nihil consequatur quasi sapiente, accusantium voluptates voluptas tenetur et eligendi illum explicabo hic?"
const aboutContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde optio ipsam maiores, fugiat debitis, ratione dolores nobis nihil consequatur quasi sapiente, accusantium voluptates voluptas tenetur et eligendi illum explicabo hic?"
const contactContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde optio ipsam maiores, fugiat debitis, ratione dolores nobis nihil consequatur quasi sapiente, accusantium voluptates voluptas tenetur et eligendi illum explicabo hic?"

const server = express();
server.use(express.urlencoded({ extended: true }));
server.set("view engine", "ejs");
// server.use(u)
var data = [];

server.get("/", (req, res) => {
    res.render("index.ejs", { homeStartingContent: homeStartingContent, inserted: data });
});


server.get("/about", (req, res) => {
    res.render("about.ejs", { aboutStartingContent: aboutContent });
});

server.get("/contact", (req, res) => {
    res.render("contact.ejs", { contactStartingContent: contactContent });
});

server.get("/compose", (req, res) => {
    res.render("compose.ejs", {});
});
server.post("/compose", (req, res) => {
    //     var information=req.body.input;
    //     var text=req.body.areas;
    // console.log(information);
    // console.log(text);
    //     res.render("compose.ejs",{});

    const post = {
        title: req.body.input,
        post: req.body.areas
    };
    data.push(post);
    res.redirect("/");
})

server.listen(4000, () => {
    console.log("This server is running on port 3000");
})