import React from 'react';
interface AccordionItemProps {
  children: React.ReactElement;
}
const AccordionItem: React.FC = ({ children }: AccordionItemProps) => {
  console.log('Greeting was rendered at', new Date().toLocaleTimeString());

  return <div>{children}</div>;
};

export default AccordionItem;
