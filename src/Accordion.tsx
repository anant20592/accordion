import React, { useContext } from 'react';
import AccordionBody from './AccordionBody';
import AccContext from './AccordionContext';
interface AccordionProps {
  expandKey: string;
  expandAll: boolean;
}
const Accordion: React.FC = ({ expandKey = '-1' }: AccordionProps) => {
  const [expandAccordion, setExpandAccordion] =
    React.useState<string>(expandKey);
  const handleToggle = () => {
    setExpandAccordion(!expandAccordion);
  };
  console.log('PArent rendered');
  return (
    <div
      style={{
        border: '1px solid blue',
        borderRadius: '4px',
        padding: '4px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <p>Accordion Label</p>
        <p onClick={handleToggle}>^</p>
      </div>
      {expandAccordion && <AccordionBody text={'Accordion body'} />}
    </div>
  );
};

export default Accordion;
