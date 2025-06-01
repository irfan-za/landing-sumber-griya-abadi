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
function formatMarkdown(content) {
  if (!content) return "";

  return content
    .replace(
      /^### (.*$)/gm,
      '<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">$1</h3>'
    )
    .replace(
      /^#### (.*$)/gm,
      '<h4 class="text-lg font-semibold text-gray-900 mt-6 mb-3">$1</h4>'
    )
    .replace(
      /^## (.*$)/gm,
      '<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">$1</h2>'
    )
    .replace(
      /^# (.*$)/gm,
      '<h1 class="text-3xl font-bold text-gray-900 mt-12 mb-6">$1</h1>'
    )
    .replace(
      /\*\*(.*?)\*\*/g,
      '<strong class="font-semibold text-gray-900">$1</strong>'
    )

    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" class="text-blue-600 hover:underline">$1</a>'
    )
    .replace(/^\s*-\s+(.*$)/gm, '<li class="ml-4 mb-1">$1</li>')
    .replace(
      /<li class="ml-4 mb-1">(.*?)<\/li>(\s*<li class="ml-4 mb-1">.*?<\/li>)*/g,
      '<ul class="list-disc pl-6 mb-4">$&</ul>'
    )
    .replace(
      /^\> (.*$)/gm,
      '<blockquote class="border-l-4 border-gray-200 pl-4 italic my-4">$1</blockquote>'
    )

    .replace(/^---$/gm, '<hr class="my-8 border-t border-gray-200">')

    .replace(
      /!\[(.*?)\]\((.*?)\)/g,
      '<div class="my-8 relative w-full h-64"><img src="$2" alt="$1" class="rounded-lg max-w-full h-auto object-cover" /></div>'
    )
    .replace(
      /```(.*?)```/gs,
      '<pre class="bg-gray-100 p-4 rounded overflow-x-auto my-4"><code>$1</code></pre>'
    )

    .replace(
      /`(.*?)`/g,
      '<code class="bg-gray-100 px-1 rounded text-sm">$1</code>'
    )
    .replace(
      /^([^<].*)/gm,
      '<p class="text-gray-700 leading-relaxed mb-4">$1</p>'
    )
    .replace(/<p class="text-gray-700 leading-relaxed mb-4"><\/p>/g, "")
    .replace(/<p class="text-gray-700 leading-relaxed mb-4"><ul/g, "<ul")
    .replace(/<\/ul><\/p>/g, "</ul>");
}

export { currencyFormat, discount, cn, generatePublishDate, formatMarkdown };
