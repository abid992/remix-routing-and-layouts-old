import { Outlet } from '@remix-run/react';
import MainHeader from '~/components/navigation/MainHeader';

import marketingStyles from '~/styles/marketing.css';

export default function MarketingLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export function links() {
  return [{ rel: 'stylesheet', href: marketingStyles }];
}

/**
 * Doing more with pathless layout routes
 * Now that we added pathless. We can also use them for more than just adding the right styles. We can for example add different navigation bars for different sets of routes.
 * Expenses link needs authentication
 */
