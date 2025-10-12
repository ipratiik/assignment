import { Avatar, AvatarFallback } from '@/app/_components/ui/avatar';
import { Badge } from '@/app/_components/ui/badge';
import { Globe, Hash, Link2, Mail, Phone, Star } from 'lucide-react';
import { ElementType } from 'react';

export default function Details() {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-1 items-start gap-3">
          <Avatar className="size-24 rounded-2xl border-6 border-white shadow-2xl">
            <AvatarFallback className='bg-gray-300'></AvatarFallback>
          </Avatar>
          <div className="my-auto flex-1">
            <h1 className="text-xs md:text-2xl font-semibold">TONY the TAILOR</h1>
            <p className="text-muted-foreground text-sm font-medium">
              Subtitle
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-gray-400">
              <Item icon={Globe} text="www.tonythetailor.com" /> <span className='hidden md:block'>|</span>
              <Item icon={Mail} text="tonytailor@example.com" /> <span className='hidden md:block'>|</span>
              <Item icon={Phone} text="+91 9876543210" /> <span className='hidden md:block'>|</span>
              <Item icon={Hash} text="TonyTailor" />
              <Item icon={Hash} text="BespokeTailoring" />
            </div>
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-end gap-1">
          <div className="flex items-center gap-2 md:gap-4 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-3 sm:size-4 fill-current" />
            ))}
          </div>
          <p className="text-green-500 text-xs md:text-sm">Online Store</p>
        </div>
      </div>
      <p className="text-muted-foreground text-xs truncate">
        Address.......................................................................................................................................................................................................................................................
      </p>
    </section>
  );
}

function Item({
  icon: Icon,
  text: detail,
}: {
  icon: ElementType;
  text: string;
}) {
  return (
    <div className="text-muted-foreground inline-flex items-center gap-1 py-1 text-xs">
      <Icon className="size-3.5" />
      <span className="truncate">{detail}</span>
    </div>
  );
}
