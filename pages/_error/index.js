function Error({ statusCode }) {
  const getResponse = code => {
    switch (code) {
      case 404:
        return <h1>404 error</h1>

      case 500:
        return <p>An error occurred on the server</p>

      default:
        return <p>An error occurred on client</p>
    }
  }

  return <>{getResponse(statusCode)}</>
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null
  return { statusCode }
}

export default Error
