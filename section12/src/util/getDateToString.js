export const getDateToString = (targetDate) => {
    // 날짜 -> YYYY-MM-DD 문자열로
    let year = targetDate.getFullYear()
    let month = targetDate.getMonth() + 1;
    let day = targetDate.getDate();

    if(month<10){
        month = `0${month}`;
    }
    if(day<10){
        day = `0${day}`;
    }

    return `${year}-${month}-${day}`;
}