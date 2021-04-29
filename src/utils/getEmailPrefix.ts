export const getEmailPrefix = (email: string) => {
  const index = email.indexOf("@");
  return email.slice(0, index);
};
