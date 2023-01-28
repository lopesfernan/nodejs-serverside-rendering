import path from 'path'
const getHomePage = async (req, res) => {
    await res.sendFile(path.join(__dirname, 'index.html'));
}



const postForm = async (req, res) => {
    const user = JSON.stringify(req.body)
    console.log(user)
    res.redirect('/')
}


export {
    getHomePage,
    postForm,
}
