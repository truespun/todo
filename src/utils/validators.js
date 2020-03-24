import bcrypt from 'bcrypt'

export async function validatePassword (extPassword, intPassword) {
  return bcrypt.compare(extPassword, intPassword)
}
export const validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body)
    if (error) {
      return res.status(400).json({ error: error.details[0].message })
    }
    next()
  }
}
