import express, { application } from 'express';
import { getHomePage, postForm } from '../controllers/formController.js';
const router = express.Router()

router.get('/', getHomePage)
router.post('/items', postForm)


export default router