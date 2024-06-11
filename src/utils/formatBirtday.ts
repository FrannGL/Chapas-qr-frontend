export const formatBirthday = (birthday: string): string => {
    console.log(birthday);
    const date = new Date(birthday);
    const utcDay = date.getUTCDate();
    const utcMonth = date.getUTCMonth() + 1;
    const utcYear = date.getUTCFullYear();
    return `${utcDay < 10 ? "0" + utcDay : utcDay}/${utcMonth < 10 ? "0" + utcMonth : utcMonth}/${utcYear}`;
};