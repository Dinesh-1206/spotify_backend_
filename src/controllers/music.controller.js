const musicModel = require("../models/music.model");
const albumModel = require("../models/album.model");
const { uploadFile } = require("../services/storage.services");
const jwt = require("jsonwebtoken");

async function createMusic(req, res) {

    const { title } = req.body;
    const file = req.file;

    const result = await uploadFile(file.buffer.toString('base64'));

    const music = await musicModel.create({
        uri: result.url,
        title,
        artist: req.user.id,
    });


    return res.status(201).json({
        message: "Music created successfully",
        music
    });

}

async function createAlbum(req, res) {

    const token = req.cookies.token

    const { title, musics } = req.body;

    const album = await albumModel.create({
        title,
        artist: req.user.id,
        music: musics,
    })

    res.status(201).json({
        message: "album created successfully",
        album: {
            id: album._id,
            title: album.title,
            artist: album.artist,
            music: album.music,
        }
    })
}

async function getAllMusics(req, res) {
    const musics = await musicModel
        .find()
        .limit(2)
        .populate("artist", "username")

    res.status(200).json({
        message: "Music retrieved successfully",
        musics: musics,
    })
}

async function getAllAlbums(req, res) {
    const albums = await albumModel.find().populate("music").populate("artist", "username")

    res.status(200).json({
        message: "Album retrieved successfully",
        albums: albums,
    })
}

module.exports = { createMusic, createAlbum, getAllMusics, getAllAlbums };