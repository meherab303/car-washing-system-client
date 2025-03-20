/* eslint-disable prettier/prettier */

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto max-w-7xl flex-grow">{children}</div>
  );
};

export default Container;
// pt-16 px-6
