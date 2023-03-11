const { Router } = require("express");
const router = Router();

const Todo = require("../models/todo");

// get all todos
router.get("/", async (req, res) => {
    try {
        const todo = await Todo.find({});

        res.json(todo);
    } catch (error) {
        console.log({
            error,
            message: "Get metod ishlamadi, Nmadur noto'g'ri ketgan!",
        });
    }
});

// get by id

router.get("/:_id", async (req, res) => {
    try {
        const todo = await Todo.find({ _id: req.params._id });

        res.json(todo);
    } catch (error) {
        console.log({
            error,
            message: "Get by id metod ishlamadi, Nmadur noto'g'ri ketgan!",
        });
    }
});

// add POST - todo
router.post("/", async (req, res) => {
    const { name } = req.body;

    let todo = await Todo.findOne({ name });
    if (todo) return res.send("This todo already exists");

    todo = new Todo(req.body);
    await todo.save();

    res.send("Todo added: OK");
});

// Delete

router.delete("/:_id", async (req, res) => {
    try {
        await Todo.findByIdAndDelete({ _id: req.params._id });
        res.send(`Todo with id: ${req.params._id} deleted`)

    } catch (error) {
        console.log({
            error,
            message: "Delete metod ishlamadi, Nmadur noto'g'ri ketgan!",
        });
    }
});

// Update

router.patch("/:_id", async (req, res) => {
    try {

        const _id = req.params._id
        const updTodo = req.body
        const result = await Todo.findByIdAndUpdate({ _id: req.params._id });
        res.send(result)

    } catch (error) {
        console.log({
            error,
            message: "Patch metod ishlamadi, Nmadur noto'g'ri ketgan!",
        });
    }
});


module.exports = router;