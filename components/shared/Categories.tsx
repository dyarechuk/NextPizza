'use client';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface Props {
  className?: string;
}

export const Categories: React.FC<Props> = ({ className }) => {
  const cats = [
    'Піцци',
    'Комбо',
    'Закуски',
    'Коктейлі',
    'Кава',
    'Напої',
    'Десерти',
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
    >
      {cats.map((cat, index) => (
        <a
          key={index}
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            activeIndex === index &&
              'bg-white shadow-md shadow-gray-200 text-primary',
          )}
        >
          <button onClick={() => setActiveIndex(index)}>{cat}</button>
        </a>
      ))}
    </div>
  );
};
