import AxiosClient from "./Api";

export async function buscarTodosOsLinks() {
    try {
        const res = await AxiosClient.get(`/buscar-links-de-usuarios`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export async function buscarLinksPorId(id){
    try {
        const res = await AxiosClient.get(`/usuarios/${id}`)
        return res.data.links
    } catch (error) {
        console.log(error)
    }
}

export async function adicionarLink(idUser, data) {
    try {
        const res = await AxiosClient.put(`/usuarios/adicionar-link/${idUser}`, data)
        console.log(res.data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export async function editarLink(idUser, data) {
    try {
        const res = await AxiosClient.put(`/usuarios/editar-link/${idUser}`, data)
        console.log(res.data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export async function deletarLink(idUser, idDoLink) {
    try {
        const res = await AxiosClient.put(`/usuarios/deletar-link/${idUser}`, {idDoLink})
        console.log(res.data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}