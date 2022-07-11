import { createContext, ReactNode, useContext, useState } from "react";

interface IUserContext{
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

interface IChildren {
  children: ReactNode
}

const DEFAULT_VALUE = {
  isLoading: false,
  setIsLoading: () => {}
}

export const LoadingContext = createContext<IUserContext>(DEFAULT_VALUE)

export const LoadingProvider = ({children} : IChildren) =>{
  const [isLoading, setIsLoading] = useState(DEFAULT_VALUE.isLoading)
  
  return(
    <>
      <LoadingContext.Provider value={{isLoading, setIsLoading}}>
        {children}
      </LoadingContext.Provider>
    </>
  )
}

export const useLoading = () => useContext(LoadingContext)

