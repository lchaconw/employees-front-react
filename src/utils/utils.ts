export const formatDate = (dateParam: string) => {
  const date = new Date(dateParam);
  return date.toLocaleDateString();
};

export const formatDateForm = (dateParam: string) => {
  const date = new Date(dateParam);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export const isValidDate = (dateString: string) => {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(dateString)) return false;
  const date = new Date(dateString);
  return date.toISOString().slice(0, 10) === dateString;
};

export const isValidCity = (city: string) => {
  return city.length > 2;
};

export const isValidAddress = (address: string) => {
  return address.length >= 5;
};

export const isValidTelephone = (telephone: string) => {
  const pattern = /^[0-9]{7,15}$/;
  return pattern.test(telephone);
};

export const isValidSalary = (salary: string) => {
  const value = parseFloat(salary);
  return !isNaN(value) && value >= 0;
};