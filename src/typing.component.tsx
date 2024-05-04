import React, { useEffect, useMemo, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function TypingRoute() {
  return (
    <TypeAnimation sequence={['Estou aqui para te ajudar, vamos começar?']} />
  );
}
