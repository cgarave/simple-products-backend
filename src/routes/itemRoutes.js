import express from 'express';
const router = express.Router();
import Items from '../models/Item.js';

router.get('/', async (req, res) => {
    const allItems = await Items.find();
    res.send(allItems);
})

router.post('/addItem', async (req, res) => {
    await new Items(req.body).save();
    res.status(201).send('success');
})

router.put('/:id', async (req, res) => {
    try {
        await Items.updateOne({ _id: req.params.id }, req.body);
        res.status(200).send('success');
    } catch (err) {
        console.log(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await Items.deleteOne({_id: req.params.id});
        res.send('delete request');
    } catch (err) {
        console.error(err);
    }
})

export default router;