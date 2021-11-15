import  mongoose  from "mongoose";
import PostMessage from "../model/postMessage.js"

export const getPosts = async (req, res) => {
    try {
        const postMessage = await PostMessage.find()
        console.log(postMessage);

        res.status(200).json(postMessage)
    } catch (error) {
        res.status(404).jsom({message: error.message})
    }
}

export const createPosts = async (req, res) => {
    const body = req.body
    
    const newPost = new PostMessage(body)
    
    try {
        await newPost.save()
        
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message})

        
    }
    res.send('Post Creation')
}
export const updatePost = async (req, res) => {
    const { id: _id } = req.params 
    const post = req.body

   if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id')

   const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {new: true})

   res.json(updatedPost)
}
export const deletePost = async (req, res) => {
    const { id: _id } = req.params 

   if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id')

   await PostMessage.findByIdAndDelete(_id)

   res.json({ message: 'post deleted successfully' })
}
 
export const likePost = async (req, res) => {
    const { id: _id } = req.params 
    

   if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id')

   const post = await PostMessage.findById(_id)
   const updatedPost = await PostMessage.findByIdAndUpdate(_id, { likeCount: post.likeCount + 1 }, { new: true })

   res.json(updatedPost)
}