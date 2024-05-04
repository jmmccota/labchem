import React from 'react';
import { MainPageType } from './types';

export default function MainPage({ content }: { content?: MainPageType }) {
  if (!content) {
    return null;
  }
  return <>Algo aqui</>;
}
