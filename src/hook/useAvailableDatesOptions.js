import useSWR from "swr";
import { CONSUMPTION_DATES_ENDPOINT } from "constants/endpoint";
import { fetcher } from "utils/fetcher";
import { visualizationType } from "constants/const";
import moment from "moment";

const getDatesBetweenDates = (startDate, endDate) => {
  let dates = [];

  const theDate = new Date(startDate);
  const endTimeUnix = new Date(endDate);

  while (theDate.getTime() < endTimeUnix.getTime()) {
    dates = [...dates, new Date(theDate)];
    theDate.setDate(theDate.getDate() + 1);
  }

  return dates;
};

export const useAvailableDatesOptions = (town, visualType) => {
  const { data: dates, error } = useSWR(
    town ? `${CONSUMPTION_DATES_ENDPOINT}?town=${town}` : null,
    fetcher
  );

  if (dates) {
    const totalDates = dates.reduce((reducer, interval) => {
      const intervalDates = getDatesBetweenDates(interval.start, interval.end);

      return [...reducer, ...intervalDates];
    }, []);

    if (visualType === visualizationType.dayView) {
      const datesOptions = totalDates.map((date) => ({
        value: date,
        label: date.toString(),
      }));

      return { dates: datesOptions.reverse(), error };
    } else if (visualType === visualizationType.yearView) {
      const yearsAvailable = totalDates.reduce((reducer, date) => {
        const dateMoment = moment(date);

        const dateYear = dateMoment.year();

        if (!reducer.includes(dateYear)) {
          return [...reducer, dateYear];
        }

        return reducer;
      }, []);

      const yearsOptions = yearsAvailable.map((year) => ({
        value: year.toString(),
        label: year.toString(),
      }));

      return { years: yearsOptions, error };
    } else if (visualType === visualizationType.monthView) {
      const monthsAvailable = totalDates.reduce((reducer, date) => {
        const dateMoment = moment(date);

        const dateMonthAndYear = dateMoment.format("MM/YYYY");

        if (!reducer.includes(dateMonthAndYear)) {
          return [...reducer, dateMonthAndYear];
        }

        return reducer;
      }, []);

      const monthsOptions = monthsAvailable.map((month) => ({
        value: month.toString(),
        label: month.toString(),
      }));

      return { months: monthsOptions, error };
    }
  }

  return { dates: [], error };
};
