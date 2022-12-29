import connectMongo from "../../../database/conn"
import {putUsers, deleteUsers, getUsers, postUsers} from '../../../database/controller'

export default async function handler(req, res) {
    connectMongo().catch(()=>res.status(405).json({error: 'Error in the connection'}));
    //type of request
    //[GET, POST, PUT, DELETE]
    const {method} = req;
    switch (method){
        case 'GET':
            await getUsers(req, res);
            break;
        case 'POST':
            await postUsers(req, res);
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
            res.status(405).end(`Method ${method} not allowed`)
    }
    //res.status(200).json({ name: 'John Doe' })
}
