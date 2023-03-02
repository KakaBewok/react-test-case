/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Blog } from '../../domain/Blog';

export const GlobalContext = React.createContext<any>(null);

export const GlobalProvider = (props: any) => {
  const [blogs, setBlogs] = React.useState<Blog[]>([]);
  const [blog, setBlog] = React.useState<Blog>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [error, setError] = React.useState<string | undefined>(undefined);

  const objState = React.useMemo(() => {
    return {
      blogs,
      setBlogs,
      blog,
      setBlog,
      isLoading,
      setIsLoading,
      currentPage, setCurrentPage,
      error, setError
    };
  }, [
    blog,
    blogs,
    isLoading,
    currentPage,
    error
  ]);

  return (
    <GlobalContext.Provider value={objState}>
      {props.children}
    </GlobalContext.Provider>
  );
};
