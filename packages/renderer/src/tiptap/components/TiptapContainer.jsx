function TiptapContainer({ children }) {
  return (
    <div
      className="col w-full text-black dark:text-white bg-white dark:bg-black h-full min-h-full"
    >
      {children}
    </div>
  );
}

export default TiptapContainer;
