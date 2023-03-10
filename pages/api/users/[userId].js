import connectMongo from "../../../database/conn"
import {deleteUsers, getUser, putUsers} from '../../../database/controller'

export default async function handler(req, res){
    connectMongo().catch(()=>res.status(405).json({error: "Error in the connection"}))
    const {method} = req;
    switch(method){
        case 'GET':
            await getUser(req,res);
            break;
        case 'PUT':
            await putUsers(req, res);
            break;
        case 'DELETE':
            await deleteUsers(req, res);
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
            res.status(405).end(`Method ${method} not allowed`)
    }
}