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

export { currencyFormat, discount, cn };
