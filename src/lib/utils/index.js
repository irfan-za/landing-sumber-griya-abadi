import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const currencyFormat = (number) => {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
  return formatter.format(number);
};

const discount = (normalPrice, discountPrice) => {
  const discount = ((normalPrice - discountPrice) / normalPrice) * 100;
  return Math.round(discount);
};

const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

const generatePublishDate = (id) => {
  const cached = localStorage.getItem(id);
  if (cached) {
    const { date, expiry } = JSON.parse(cached);
    if (expiry > Date.now()) {
      return date;
    }

    localStorage.removeItem(id);
  }

  const sixtyDaysAgo = new Date();
  sixtyDaysAgo.setDate(sixtyDaysAgo.getDate() - 60);

  const randomTime =
    sixtyDaysAgo.getTime() +
    Math.random() * (Date.now() - sixtyDaysAgo.getTime());
  const randomDate = new Date(randomTime);

  const formattedDate = randomDate.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const expiryDate = Date.now() + 7 * 24 * 60 * 60 * 1000;
  localStorage.setItem(
    id,
    JSON.stringify({
      date: formattedDate,
      expiry: expiryDate,
    })
  );

  return formattedDate;
};

export { currencyFormat, discount, cn, generatePublishDate };
