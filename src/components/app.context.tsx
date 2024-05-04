import React from 'react';
import { RouterDataType } from '../types';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const AppContext = React.createContext<RouterDataType | null>(null);

export function AppProvider(
  props: React.PropsWithChildren<{ state?: RouterDataType }>
) {
  //	const [state, setState] = React.useState<RouterDataType>(props.state);

  const { isLoading, data } = useQuery<RouterDataType>({
    queryKey: ['load-app'],
    queryFn: async () => {
      const req = await axios.get<RouterDataType>('/site.json');
      return req.data;
    },
    enabled: !props.state,
  });

  if (isLoading || !data) {
    return <>...Loading...</>;
  }

  return (
    <AppContext.Provider value={data ?? props.state}>
      {props.children}
    </AppContext.Provider>
  );
}
