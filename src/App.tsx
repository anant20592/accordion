import * as React from 'react';
import Accordion from './Accordion';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Accordion</h1>
      <Accordion expand={true} key={'acc_1'} />
      <Accordion expand={false} key={'acc_2'} />
    </div>
  );
}
