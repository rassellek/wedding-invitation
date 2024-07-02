import dayjs from 'dayjs';

interface GetTimeDto {
  year: string,
  month: string,
  day: string,
  hour: string,
  min: string,
  sec: string,
}
export function getTime(value: Date): GetTimeDto {
  const checkDay = Date.parse('2024-08-09T19:00:00Z');
  const diff = dayjs(checkDay).diff(dayjs(value));

  const year = Math.floor(diff / 31104000000).toString().padStart(2, '0');// time diff in years
  const month = Math.floor((diff / 2592000000) % 12).toString().padStart(2, '0'); // time diff in months (modulated to 12)
  const day = Math.floor((diff / 86400000) % 30).toString().padStart(2, '0'); // time diff in days (modulated to 30)
  const hour = Math.floor((diff / 3600000) % 24).toString().padStart(2, '0'); // time diff's hours (modulated to 24)
  const min = Math.floor((diff / 60000) % 60).toString().padStart(2, '0'); // time diff's minutes (modulated to 60)
  const sec = Math.floor((diff / 1000) % 60).toString().padStart(2, '0'); // time diff's seconds (modulated to 60)

  // return `${month} / ${day} / ${hour} / ${min} / ${sec}`;
  return {
    year,
    month,
    day,
    hour,
    min,
    sec,
  };
}
