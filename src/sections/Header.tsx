import { Bell, CircleUserRound } from 'lucide-react';

export default function Header() {
  return (
    <header className="border-b-2 border-gray-300 shadow-2xl">
      <div className="my-5 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <p className="text-md font-mono font-semibold md:text-xl">
            TailorAlly
          </p>
        </div>
        <p className="text-muted-foreground text-xs text-balance md:text-base">
          {'Welcome to '}
          <span className="bg-gradient-to-b from-fuchsia-400 via-purple-400 to-violet-700 bg-clip-text font-bold text-transparent">
            Store Name
          </span>
          {' store'}
        </p>
        <div className="flex items-center gap-2 sm:gap-4">
          <Bell className="size-6 text-purple-600" />
          <CircleUserRound className="size-6 rounded-full bg-purple-600 text-white" />
        </div>
      </div>
    </header>
  );
}
