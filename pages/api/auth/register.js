export default (req, res) => {
    if (req.method != "POST") {
        res.status(405).end() //method not allowed
        return
    }

    console.log(req.body)
    res.end()
}