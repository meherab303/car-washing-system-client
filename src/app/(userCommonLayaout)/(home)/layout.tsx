/* eslint-disable prettier/prettier */




export default function layout({
  children,recentServices
}: {
  children: React.ReactNode;
  recentServices: React.ReactNode;
}) {
  return (
    <>
 
      {children}
      {recentServices}
    
  </>
  );
}