import { AxiosClient } from "./Api"

export async function carregarPerfil(id) {
    try {
        const res = await AxiosClient.get(`/usuarios/${id}`);
        return res.data
    } catch (error) {
      console.log(error);  
    }
}

export async function atualizarUsuario(idUser, dados) {
    try {
        const res = await AxiosClient.put(`/usuarios/${idUser}`, dados);
        return res.data
    } catch (error) {
      console.log(error);  
    }
}


export async function criarConta(dados) {
    try {
        await AxiosClient.post('/usuarios', {
            nome: dados.name,
            email: dados.email,
            senha: dados.password
        })

        return {
            error: false,
            message: 'Usuário Criado'
        }
    } catch (error) {
        console.log(error.response.data);
        return {
            error: true,
            message: 'Erro ao criar usuario'
        }
    }
}


export async function recuperarSenhaPorEmail(email) {
    try {
        await AxiosClient.get(`/usuarios/recuperar-senha/${email}`)
        return {
            error: false,
            message: 'Verifique a sua caixa de email!!!'
        }
    } catch (error) {
        return {
            error: true,
            message: 'Erro ao tentar recuperar a senha'
        }
    }
}

export async function atualizarSenhaComToken(token, novaSenha) {
    try {
        const res = await AxiosClient.put(`/usuarios/atualizar-senha/${token}`, { novaSenha })
        console.log(res.data);
        return {
            error: false,
            message: 'Senha atualizada com sucesso'
        }

        
    } catch (error) {
        return {
            error: true,
            message: 'Erro ao tentar atualizar senha'
        }
    }
}