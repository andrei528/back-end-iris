import { cadastrar } from "../model/model.js";

export const pedirCaoGuia = async (req, res) => {
    const formReq = req.body;
    try{
        console.log("Requisição recebida: ", req.body);
        const cadastro = await cadastrar(formReq);
        res.status(200).json(cadastro);
    } catch(erro){
        console.error("Erro na requisição: ", erro.message);

        if (erro.message === "Usuário ja inscrito!") {
            return res.status(409).json({ error: erro.message });
        }

        res.status(500).json({"error": "Falha na requisição"});
    }
}