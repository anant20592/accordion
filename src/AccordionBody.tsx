import React from 'react';
interface AccordionBodyProps {
  text: string;
}
const AccordionBody: React.FC = ({ text }: AccordionBodyProps) => {
  console.log('Greeting was rendered at', new Date().toLocaleTimeString());

  return <div>{text}</div>;
};

export default AccordionBody;
