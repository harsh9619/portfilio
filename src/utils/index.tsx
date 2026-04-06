import React, { useCallback, useRef } from 'react';

export const calculateDuration = (period: string) => {
  const [startStr, endStr] = period.split(' – ');

  const startDate = new Date(startStr);
  const endDate = endStr.toLowerCase() === 'present' ? new Date() : new Date(endStr);

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  let duration = '';
  if (years > 0) duration += `${years} Yr${years > 1 ? 's' : ''} `;
  if (months > 0) duration += `${months} Mo${months > 1 ? 's' : ''}`;

  return duration.trim();
}

export const calculateTotalExperience = (jobs: any[], period = '') => {
  let totalMonths = 0;

  const monthMap = {
    Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6,
    Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12
  };

  const today = new Date();

  if(period) {
     let [start, end] = period.split('–').map(s => s.trim());
     if (end.toLowerCase() === 'present') {
      end = `${today.toLocaleString('en-US', { month: 'short' })} ${today.getFullYear()}`;
    }

    const [startMonthStr, startYear] = start.split(' ');
    const [endMonthStr, endYear] = end.split(' ');

    const startMonth = monthMap[startMonthStr];
    const endMonth = monthMap[endMonthStr];

    totalMonths += (parseInt(endYear) - parseInt(startYear)) * 12 + (endMonth - startMonth);
  } else{

  jobs.forEach(job => {
    let [start, end] = job.period.split('–').map(s => s.trim());

    if (end.toLowerCase() === 'present') {
      end = `${today.toLocaleString('en-US', { month: 'short' })} ${today.getFullYear()}`;
    }

    const [startMonthStr, startYear] = start.split(' ');
    const [endMonthStr, endYear] = end.split(' ');

    const startMonth = monthMap[startMonthStr];
    const endMonth = monthMap[endMonthStr];

    totalMonths += (parseInt(endYear) - parseInt(startYear)) * 12 + (endMonth - startMonth);
  });
}

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return months > 0 ? `${years}+` : `${years}`;
}

