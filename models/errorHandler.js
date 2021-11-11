// for router error status
const errorHandler = (error, res) => {
  res.status(500).render('errorPage', { status: 500, error: error.message })
  console.log(error)
}

// method : errorHandler ( error, res ) to show error page
module.exports = errorHandler
