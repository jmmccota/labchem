import React, { useMemo } from 'react';
import { RouterDataType } from '../types';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import {Helmet} from "react-helmet";
import { isDarkMode } from '../utils/utils';

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

  const hasDarkMode = useMemo(() => isDarkMode(), []);
  
  if (isLoading || !data) {
    return <>...Loading...</>;
  }

  return (
    <AppContext.Provider value={data ?? props.state}>
      <Helmet>
        {hasDarkMode ? <link rel="icon" type="image/svg+xml" href="/lab-logo-white.svg" /> : <link rel="icon" type="image/svg+xml" href="/lab-logo.svg" />}
      </Helmet>
      {props.children}
    </AppContext.Provider>
  );
}
