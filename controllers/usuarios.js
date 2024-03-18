const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {

    const { q, nombre = 'no-name', apikey, page, limit } = req.query;

    res.status(200).json({
        ok: true,
        message: "get API - Controller",
        q,
        nombre,
        apikey,
        page,
        limit
    });
};

const usuariosPost = (req = request, res = response) => {
    const { nombre, edad, id, apellido } = req.body;
    res.status(201).json({
        ok: true,
        message: "post API - Controller",
        body: {
            nombre,
            edad
        }
    });
};

const usuariosPut = (req = request, res = response) => {

    const id = req.params['id'];

    res.status(500).json({
        ok: true,
        message: "put API - Controller",
        id
    });
};

const usuariosPatch = (req, res = response) => {
    res.status(204).json({
        ok: true,
        message: "patch API - Controller"
    });
};

const usuariosDelete = (req, res = response) => {
    res.status(203).json({
        ok: true,
        message: "delete API - Controller"
    });
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}
