'use client';

import { cn } from '@/lib/utils';
import { Title } from './Title';
import { Input } from '../ui';
import { FilterCheckbox } from './FilterCheckbox';
import { useState } from 'react';
import { RangeSlider } from './RangeSlider';
import { CheckboxFiltersGroup } from './CheckboxFiltersGroup';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const [minValue, setMinValue] = useState(0);
  return (
    <div className={cn('', className)}>
      <Title text="Фільтрування" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можна зібрати" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Ціна від і до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={minValue}
            max={400}
            defaultValue={0}
          />
          <Input type="number" min={100} max={400} placeholder="400" />
        </div>
        <RangeSlider min={0} max={400} step={10} value={[0, 400]} />
      </div>

      <div className="">
        <CheckboxFiltersGroup
          title="Інгредієнти"
          className="mt-5"
          limit={6}
          defaultItems={[
            { text: 'Сирний соус', value: '1' },
            { text: 'Моцарела', value: '2' },
            { text: 'Часник', value: '3' },
            { text: 'Мариновані огірки', value: '4' },
            { text: 'Червона цибуля', value: '5' },
            { text: 'Томати', value: '6' },
          ]}
          items={[
            { text: 'Сирний соус', value: '1' },
            { text: 'Моцарела', value: '2' },
            { text: 'Часник', value: '3' },
            { text: 'Мариновані огірки', value: '4' },
            { text: 'Червона цибуля', value: '5' },
            { text: 'Томати', value: '6' },
          ]}
          onChange={(values) => console.log(values)}
        />
      </div>
    </div>
  );
};
