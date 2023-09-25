import { forwardRef, ForwardedRef } from 'react';
import OutlinedDetail from '../components/ui/outline/OutlinedDetail';

const OutlinePage = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div ref={ref} className="flex flex-col justify-center py-[30%]">
      <OutlinedDetail />
    </div>
  );
});

export default OutlinePage;
