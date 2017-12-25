const passport = require('passport');
const keys = require('../config/keys');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy(
    {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
    }, 
    function (accessToken, refreshToken, profile, done) {
        console.log('Access Token: ', accessToken)
        console.log('Refresh Token: ', refreshToken)
        console.log('User Profile: ', profile)
    }
)
);