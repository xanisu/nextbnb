import { User } from '../../../model.js'

export default async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).end() //Method Not Allowed
    return
  }

  const { email, password, passwordconfirmation } = req.body

  const user = await User.create({ email, password })
  res.end(JSON.stringify({ status: 'success', message: 'User added' }))
}