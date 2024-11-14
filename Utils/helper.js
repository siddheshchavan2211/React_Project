export function filterfunction(defaultvalue, filtersearch) {
  return filtersearch.filter((item) =>
    item?.title?.toLowerCase()?.includes(defaultvalue.toLowerCase())
  );
}
