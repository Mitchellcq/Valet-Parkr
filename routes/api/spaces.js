const express = require('express');
const router = express.Router();

const Space = require("../../models/Space");

//methods for Spaces

router.get('/spaces', async (req, res) => {
    const space = await Space.find((data) => data);

    try {
        console.log(space);

        res.json(space)
    } catch (error) {
        console.log(error);
    }
});

router.get('/add-space', (req, res) => {
    res.status(200).render('edit-space', { editing: false });
});

router.post('/add-space', (req, res) => {
    const { name, image, address } = req.body;

    const space = new Space({ name: name, image: image, address: address });
    space.save();
    console.log('Space Added to the database');
    res.status(201).redirect('/');
});

router.get('/:spaceId', async (req, res) => {
    const spaceId = req.query.spaceId;
    console.log("SpaceId:" + spaceId);

    const space = await Space.findById(spaceId, (space) => space);

    try {
        console.log(space);
        res.status(200).render('space', { space: space });
    } catch (error) {
        console.log(error);
    }
});

router.get('/edit-space/:spaceId', async (req, res) => {
    const spaceId = req.params.spaceId;

    const editMode = req.query.edit;

    if (!editMode) {
        return res.redirect('/');
    }

    const space = await Space.findById(spaceId);

    try {
        if (!spaceId) {
            return res.redirect('/');
        }
        console.log(space);
        res.status(200).render('edit-space', { space: space, editing: editMode });
    } catch (error) {
        console.log(error);
    }
});

router.post('/delete', async (req, res) => {
    const spaceId = req.body.spaceId;

    const space = await Space.findByIdAndRemove(spaceId, (data) => data);

    try {
        console.log(space);
        console.log('Item Deleted');
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
});

router.post('/edit-space', async (req, res) => {
    const spaceId = req.body.spaceId;
    const { name, image, address } = req.body;

    await Space.findById(spaceId)
        .then((space) => {
            space.name = name;
            space.image = image;
            space.description = address;

            return space.save();
        })
        .then(() => {
            console.log('Item Updated');
            res.status(201).redirect('/');
        })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = router;