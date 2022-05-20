function formatDate(date) {
  return new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(date);
}

export default formatDate;
