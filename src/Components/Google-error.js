// src/Pages/GoogleError.jsx
import { useLocation } from 'react-router-dom';

export default function GoogleError() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const reason = params.get("reason");

  return (
    <div className="error-container">
      <h1>A Problem Has Been Happend!</h1>
      {reason === "not_google_account" && (
        <p>We Have Already As This Email Our App Go <a href='/login'> Login</a> With Your Email And Password</p>
      )}
      {reason === "google_callback_failed" && (
        <p>Our Service Has Failled For Some Reason We Don't Know. <a href='/'>GO HOME</a></p>
      )}
    </div>
  );
}
