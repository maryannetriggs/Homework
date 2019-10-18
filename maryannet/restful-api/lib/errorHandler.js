function errorHandler(err, req, res, next) {
  if (err.name === 'ValidationEror') {
    const errors = {}

    for (const key in err.errors) {
      errors[key] = err.errors[key].message
    }

    err.errors = errors

    return res.status(422).json({ message: 'unprocessable entity', errors })
  }
  res.sendStatus(500)
  next(err)
}

module.exports = errorHandler