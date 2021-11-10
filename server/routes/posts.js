import express from 'express'
import { createtPosts, getPosts } from '../controller/posts.js'

const router = express.Router()

router.get('/', getPosts)
router.post('/', createtPosts)

export default router