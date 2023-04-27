module.exports = function sanitize(input) {
  if (input === null || input === undefined) {
    return null;
  }
  if (typeof input !== "string") {
    return null;
  }

  return input
    .replace(
      /\bselect\b|\bdelete\b|\bupdate\b|\bfrom\b|\bwhere\b|\binsert\b|\bset\b|;|\bdrop\b|--|\btable\b|=|'|"|;|\bOR\b|\bAND\b/gi,
      ""
    )
    .trim();
};
