'use client';
import { DesktopAppBar, MobileAppBar } from './_components';
import { useIsMobile } from '@/lib/hooks/breakpoints';

export default function AppBar() {
  const isMobile = useIsMobile();
  return isMobile ? <MobileAppBar /> : <DesktopAppBar />;
}
