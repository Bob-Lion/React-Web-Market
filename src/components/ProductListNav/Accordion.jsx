import { AccordionSet } from './AccordionSet';
import { AccordionFillter } from './AccordionFillter';
export function Accordion({ category_data, brand_data }) {
  return (
    <div>
      <div>
        <AccordionFillter />
        <AccordionSet listName="카테고리" data={category_data} />
        <AccordionSet listName="브랜드" data={brand_data} />
      </div>
    </div>
  );
}
