import { cn } from '@/lib/utils';
import { Popover } from '../ui';
import { PopoverContent, PopoverTrigger } from '../ui/popover';
import { ArrowUpDown } from 'lucide-react';

interface Props {
  className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer',
        className,
      )}
    >
      <ArrowUpDown size={16} />
      <p>Сортування:</p>
      <p className='text-primary'>за рейтингом</p>
    </div>
  );
};
