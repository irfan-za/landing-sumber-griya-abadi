import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Loading() {
  return (
    <MaxWidthWrapper>
      <div class="lg:max-w-4/5 bg-slate-100 my-12 rounded-t-lg mx-auto animate-pulse">
        <div class="h-16 bg-gray-300 rounded-lg"></div>
        <div class="h-48 w-48 bg-gray-300 rounded-lg mt-4 mx-auto"></div>
        <div class="h-12 bg-gray-300 rounded-lg mt-4 mx-auto"></div>
        <div class="h-12 bg-gray-300 rounded-lg mt-4 mx-auto"></div>
        <div class="h-48 bg-gray-300 rounded-lg mt-4 mx-auto"></div>
        <div class="h-12 bg-gray-300 rounded-lg mt-4 mx-auto"></div>
        <div class="h-48 bg-gray-300 rounded-lg mt-4 mx-auto"></div>
      </div>
    </MaxWidthWrapper>
  );
}
