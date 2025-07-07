import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export const cadastrar = async (formulario) => {
    const db = conexao.db("iris");
    const colecao = db.collection("usuarios");

    const verify = await colecao.findOne({cpf: formulario.cpf})
    if(verify){
        throw new Error("Usuário ja inscrito!");
    }
    else{
        return colecao.insertOne(formulario);
    }
}