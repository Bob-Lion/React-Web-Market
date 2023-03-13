import { AccordionSet } from './AccordionSet';

export function Accordion({ data, listName }) {
  return (
    <div>
      <div>
        <AccordionSet data={data} listName={listName} />
      </div>
    </div>
  );
}
