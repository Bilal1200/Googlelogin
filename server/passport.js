const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
passport.use(
  new GoogleStrategy(
    {
      clientID:
        "487795056743-a3injcrcjr33s5j07plv5c8hroltj8nn.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    function (accessToken, refreshToken, profile, callback) {
      callback(null, profile);
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
