
export const formatDate = (date: Date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
};

export const getDateRange = (week: number, year: number): Date[] => {
    const januaryFirst = new Date(year, 0, 1);
    const januaryFirstDayOfWeek = januaryFirst.getDay();
    const daysToFirstMonday = (januaryFirstDayOfWeek === 1 ? 0 : (8 - januaryFirstDayOfWeek) % 7);
    const firstMonday = new Date(year, 0, 1 + daysToFirstMonday);

    const weekStart = new Date(firstMonday);
    weekStart.setDate(firstMonday.getDate() + (week - 1) * 7);

    const weekDates: Date[] = [];
    for (let i = 0; i < 7; i++) {
        const date = new Date(weekStart);
        date.setDate(weekStart.getDate() + i);
        weekDates.push(date);
    }

    return weekDates;
}

export const getNumberWeek = (date: Date): number => {
  const target = new Date(date);
  const day = target.getDay();

  const monday = new Date(target);
  monday.setDate(target.getDate() - (day === 0 ? 6 : day - 1));
  
  const firstThursday = new Date(monday);
  firstThursday.setDate(monday.getDate() + 3);
  
  const year = firstThursday.getFullYear();
  const yearStart = new Date(year, 0, 1);
  yearStart.setDate(yearStart.getDate() + (4 - yearStart.getDay() + 7) % 7);
  
  const weekNumber = Math.floor(
    (monday.getTime() - yearStart.getTime()) / 604800000 + 1
  );
  
  return weekNumber;
};

export const getCurrentMonthByWeek = (week: number): string => {
  const months = [
    'январь', 'февраль', 'март', 'апрель', 'май', 'июнь',
    'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'
  ];
  
  const currentYear = new Date().getFullYear();
  
  const firstDayOfYear = new Date(currentYear, 0, 1);
  const dayOfWeek = firstDayOfYear.getDay(); 
  const daysOffset = (week ) * 7 - (dayOfWeek === 0 ? 6 : dayOfWeek - 1);
  
  const targetDate = new Date(currentYear, 0, 1 + daysOffset);
  
  return months[targetDate.getMonth()];
};