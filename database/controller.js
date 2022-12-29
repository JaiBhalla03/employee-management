//controllers function
import Users from '../model/user'

//get request

//endPoint : http://localhost:3000/api/users
export async function getUsers(req, res){
    try{
        const users = await Users.find({})
        if(!users) return res.status(404).json({error: "data not found"})
        res.status(200).json(users)
    }
    catch(error){
        res.status(404).json({
            error: "Error while fetching data!"
        })
    }
}


//get : http://localhost:3000/api/users/1
export async function getUser(req, res){
    try{
        const {userId} = req.query;
        if(userId){
            const user = await Users.findById(userId);
            return res.status(200).json(user);
        }
        return res.status(404).json({error: "User not selected!"})
    }
    catch(error){
        res.status(404).json({
            error: "error while fetching the individual user!"
        })
    }
}

//POST request
//endPoint : http://localhost:3000/api/users

export async function postUsers(req, res){
    try{
        const formData = req.body;
        if(!formData) return res.status(404).json({
            error: "Data not provided!"
        })
        await Users.create(formData, function (err, data){
            return res.status(200).json(data);
        })
    }
    catch(error){
        return res.status(404).json({error})
    }
}

//put: http://localhost:3000/api/users/1        (you need both the id of the users and formData)
export async function putUsers(req, res){
    try{
        const {userId} = req.query  // getting the user id from the request
        const formData = req.body  // getting the user current data
        // if the both of them exist
        if(userId && formData){
            await Users.findByIdAndUpdate(userId, formData);
            res.status(200).json(formData);
        }
        res.status(404).json({error: "user not selected!"});
    }
    catch(error){
        res.status(404).json({error: "Error while updating the data"});
    }
}

//delete: http://localhost:3000/api/users/1         (you need only the userId)
export async function deleteUsers(req, res){
    try{
        const {userId} = req.query;
        if(userId){  //if the userId exist
            const user = await Users.findByIdAndDelete(userId);
            return res.status(200).json({deleted: userId});
        }
        return res.status(404).json({error: "Usr not selected!"})
    }
    catch(error){
        res.status(404).json({error: "Error while deleting the user"});
    }
}