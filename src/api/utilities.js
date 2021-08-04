module.exports = {
  randomDate: function randomDate() {
    const start = Date.now();
    const end = new Date(2003, 1, 1);
    const d = new Date(start + Math.random() * (end - start));
    let month = `${d.getMonth() + 1}`;
    let day = `${d.getDate()}`;
    const year = d.getFullYear();

    if (month.length < 2) month = `0${month}`;
    if (day.length < 2) day = `0${day}`;

    return [year, month, day].join("-");
  },
};
