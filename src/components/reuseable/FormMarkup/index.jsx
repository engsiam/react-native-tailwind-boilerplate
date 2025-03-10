function FormMarkup({ children,text,className }) {
  return (
    <div className="p-8 mt-10 lg:mt-36">
      <div className="mx-auto text-center sm:max-w-xl lg:max-w-sm">
        <h2 className={`text-2xl font-semibold ${className}`}>{text}</h2>
        <div className="relative mt-4 text-left bg-white shadow-md sm:rounded-lg">
          <div className="h-1 bg-indigo-400 rounded-t-md"></div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default FormMarkup;
