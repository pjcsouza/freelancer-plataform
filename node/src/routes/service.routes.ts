import {Router, Request, Response} from "express"
import { ServiceController } from "../controllers/service.controller";



const serviceRoute = Router()

const serviceController = new ServiceController();

serviceRoute.route("/")
.get((req:Request, res:Response)=>{

    let services = serviceController.getAllServices();

    return res.json(
        services
    )})
.post((req:Request, res:Response)=>{

;
    let descricao = req.body.descricao;
    let valor = parseInt(req.body.valor);
    let tipo = req.body.tipo;

    const newService = serviceController.newService(descricao, valor, tipo);
    
    return res.json({Message:"serviço cadastrado com sucesso"})
})
.put((req:Request, res:Response)=>{
    return res.json({
        Warning: "Método não permitido para /services"
    })})

serviceRoute.route("/:id")
.delete((req:Request, res:Response)=>{
    let id: number= parseInt(req.params.id);
 

    let deleteService = serviceController.deleteService(id);
    if(!deleteService){
        return res.status(404).json({err: "Serviço não encontrado"});
    }
    return res.status(200).json({err: "Serviço deletado com sucesso"})});



export default serviceRoute;