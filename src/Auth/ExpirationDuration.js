const getExpirationDuration = () => {
  const storedExpiration = localStorage.getItem("expiration");
  const expirationTime = new Date(storedExpiration);
  const now = new Date();
  const duration = expirationTime.getTime() - now.getTime();

  return duration;
};

export default getExpirationDuration;
