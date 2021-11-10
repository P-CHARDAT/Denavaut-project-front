import { useNavigate } from "react-router-dom";

import React, { useEffect } from "react";

export default function PrivateRoute({ children, ...rest }) {
  let auth = true; // Change this behaviour, of course !
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  }, []);
  if (auth) {
    return <React.Fragment>{children}</React.Fragment>;
  } else {
    return null;
  }
}
