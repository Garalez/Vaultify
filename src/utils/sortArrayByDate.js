export const sortArrayByDate = (arr) =>
  arr.sort((a, b) => {
    if (new Date(a.date ||= 0).getTime() > new Date(b.date ||= 0).getTime()) {
      return -1;
    }
  });
