export function Card({ children }) {
  return (
    <div className="w-11/12 col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-7">
      {children}
    </div>
  );
}
