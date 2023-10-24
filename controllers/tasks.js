const Task = require("../models/task");

const getAllTasks = async (req, res)=>{
    try {
        const tasks = await Task.find({})
        res.status(201).json({tasks: tasks, number: tasks.length});
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }                                                            
};

const getSingleTask = async(req, res)=>{
	try{
		const {id: taskID} = req.params;
		const task = await Task.findOne({_id: taskID});
		if(!task){
			return res.status(404).json({msg: `task with id ${taskID} not found`});
		}
		res.status(200).json({task});
	}catch(error){
		res.status(500).json({err: error.message});
	}
}

const createTask = async (req, res)=>{
	try{
		const task = await Task.create(req.body);
		res.status(201).json(task);
	}catch(error){
		res.status(500).json({err: error.message});
	}
}

const deleteTask = async (req, res)=>{
	try{
		const {id: taskID} = req.params;
		const task = await Task.findOneAndDelete({_id: taskID});
		if(!task){
			return res.status(404).json({msg: `task with id ${taskID} not found`});
		}
		res.status(200).json({task});
	}catch(error){
		res.status(500).json({err: error.message});
	}
}

const updateTask = async (req, res)=>{
	try{
		const {id: taskID} = req.params;
		const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {new: true, runValidators: true});
		if(!task){
			return res.status(404).json({msg: `Task with id ${taskID} not found`});
		}
		res.status(200).json({task});
	}catch(error){
		res.status(500).json({err: error.message});
	}
}

module.exports = {
    getAllTasks,
    getSingleTask,
    createTask,
    deleteTask,
    updateTask,
}