//Import the Todo model
const Todo = require("../models/Todo");

exports.deleteTodo = async(req,res) => {
    try{
        const {id} = req.params;
        await Todo.findByIdAndDelete(
            {_id:id}
        ),

        res.status(200).json({
            success:true,
            message:`Todo Deleted Successfully`,
        })
    }
    catch(err){
       console.error(err);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}