import {Router, Request, Response} from "express"
import { UserController } from "../controllers/user.controller";


const userRouter = Router()

const userController = new UserController();

userRouter.route("/")
.get((req:Request, res:Response)=>{

    let users = userController.getAllUsers();

    return res.json(
        users
    )})
.post((req:Request, res:Response)=>{

    // id:number;
    // nome:string;
    // email:string;
    // password:string;
    // tipo:string;
    let nome = req.body.nome;
    let email = req.body.email;
    let password = req.body.password;
    let tipo = req.body.tipo;

    const newUser = userController.createuser(nome, email, password, tipo);
    if(newUser){
        return res.json({Message:"usuário criado com sucesso"})
    }
    return res.status(409).json({err: "email ja usado por outro usuário"})
    
})
.put((req:Request, res:Response)=>{
    return res.json({
        Warning: "Método não permitido para /users"
    })})
.delete((req:Request, res:Response)=>{
    return res.json({
        Warning: "Método não permitido para /users"
    })});

userRouter.route("/:id")
.get((req:Request, res:Response)=>{
    let id: number= parseInt(req.params.id);
    let user = userController.getUserById(id);
    if (!user){
        return res.status(404).json({err: "Usuário não encontrado"})
    }

    return res.json({user})
})
.post((req:Request, res:Response)=>{
    return res.json({
        Warning: "Método POST não permitido para /users/:ID"
    })
})
.put((req:Request, res:Response)=>{
    let id: number= parseInt(req.params.id);
    let nome = req.body.nome;
    let password = req.body.password;

    let updateUser = userController.updateUser(id, nome, password);

    if(!updateUser){
        return res.status(404).json({err: "Usuário não encontrado"});
    }
    return res.status(200).json({err: "Usuário atualizado com sucesso"})
})
.delete((req:Request, res:Response)=>{
    let id: number= parseInt(req.params.id);
 

    let deleteUser = userController.deleteUser(id);

    if(!deleteUser){
        return res.status(404).json({err: "Usuário não encontrado"});
    }
    return res.status(200).json({err: "Usuário deletado com sucesso"})
    
})

export default userRouter;