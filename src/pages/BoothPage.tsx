import BoothDetail from '../components/ui/booth/Boothdetail';
import { forwardRef, ForwardedRef } from 'react';

const BoothPage = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div ref={ref}>
      <BoothDetail />
    </div>
  );
});

export default BoothPage;
