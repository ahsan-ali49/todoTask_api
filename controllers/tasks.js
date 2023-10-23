const getAllTask = (req, res)=>{
    res.json({msg: "All items from the file"});
};

const getSingleTask = (req, res)=>{
    res.json({msg: "Get Single Task"});
};

const createTask = (req, res)=>{
    res.json({msg: "create Task."});
};

const deleteTask = (req, res)=>{
    res.json({msg: "Delete Task"});
};

const updateTask = (req, res)=>{
    res.json({msg: "Update Task"});
};

module.exports = {
    getAllTask,
    getSingleTask,
    createTask,
    deleteTask,
    updateTask,
}