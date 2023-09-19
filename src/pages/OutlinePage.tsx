import { forwardRef, ForwardedRef } from 'react';
import OutlinedDetail from '../components/ui/outline/OutlinedDetail';

const OutlinePage = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div ref={ref} className="flex flex-col justify-center py-20">
      <OutlinedDetail />
    </div>
  );
});

export default OutlinePage;

// style={{
//   backgroundColor: 'black',
//   backgroundImage: 'url(/images/outline.webp)',
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',
//   backgroundPosition: 'center',
//   position: 'relative',
//   zIndex: -1,
// }}
