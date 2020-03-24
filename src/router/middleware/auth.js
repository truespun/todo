import jwt from 'jsonwebtoken'

const wrapAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next)
  }
}
const checkAuth = (options) => {
  return wrapAsync(async (req, res, next) => {
    const bearerToken = getTokenFromHeaders(req).split(' ')
    const token = bearerToken[1].toString()
    let decoded = {}
    try {
      decoded = await jwt.verify(token, process.env.JWT_SECRET)
    } catch (err) {
      throw new Error('no access(token)')
    }

    req.payload = decoded

    if (options.role) {
      if (options.role <= decoded.role) {
        next()
      } else {
        throw new Error('no access(role)')
      }
    } else {
      next()
    }
  })
}
const getTokenFromHeaders = (req) => {
  const { headers: { authorization } } = req
  if (authorization) {
    return authorization
  }
  return null
}
export const auth = {
  required: checkAuth({ role: undefined })
}
