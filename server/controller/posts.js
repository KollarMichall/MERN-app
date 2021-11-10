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

export const createtPosts = async (req, res) => {
    const body = req.body
    
    const newPost = new PostMessage(body)
    
    try {
        await newPost.save()
        
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).jsom({message: error.message})

        
    }
    res.send('Post Creation')
}
