import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookie from "universal-cookie";
import Loading from './Loading';

export default function GoogleSuccess() {
  const navigate = useNavigate();
  const cookie = new Cookie();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const access_token = params.get("access_token");
    const refresh_token = params.get("refresh_token");

    if (access_token && refresh_token) {
      cookie.set("Portfolio_AccessToken", access_token, {
        path: "/",
        secure: true,
        sameSite: "strict",
      });

      cookie.set("Portfolio_RefreshToken", refresh_token, {
        path: "/",
        secure: true,
        sameSite: "strict",
      });

      navigate("/");
    }
  }, []);

  return <Loading />;
}
