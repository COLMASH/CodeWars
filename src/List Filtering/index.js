function filter_list(l) {
  return l.filter((v) => typeof v == "number");
}

module.exports = filter_list;
