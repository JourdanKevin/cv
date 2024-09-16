import express from 'express';
import Jfile from '../db/jfile.js';

const router = express.Router();

router.get('/:filename(*)', async (req, res) => {
    const jfile = new Jfile(req.params.filename)
    try {
        const data = await jfile.read();
        res.send(data);
    } catch (error) {
        res.status(500).send(`Error reading JSON file: ${error.message}`);
    }
});

export default router;