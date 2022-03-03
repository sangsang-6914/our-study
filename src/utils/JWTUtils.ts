const JWTParseToString = (payload: string) => {
  const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
  return decodeURIComponent(
    atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(''),
  );
};

const JWTParseToObject = (payload: string) => {
  return JSON.parse(JWTParseToString(payload));
};

export {JWTParseToString, JWTParseToObject};
