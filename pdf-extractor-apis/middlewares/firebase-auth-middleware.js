const admin = require('firebase-admin');

const checkIfAuthenticated = (req, res, next) => {
  const idToken = req.headers.authorization?.split('Bearer ')[1];

  if (!idToken) {
    return res.status(401).json({ error: 'Unauthorized: Missing authentication token' });
  }

  admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      console.log("verification worked")
      // The user is authenticated, and `decodedToken` contains user information.
      req.user = decodedToken;
      next(); // Continue to the protected route
    })
    .catch((error) => {
      return res.status(401).json({ error: 'Unauthorized: Invalid authentication token' });
    });
};

module.exports = checkIfAuthenticated;
