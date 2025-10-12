import { Button } from '@/app/_components/ui/button';
import { Card, CardContent } from '@/app/_components/ui/card';
import { Separator } from '@/app/_components/ui/separator';
import { Phone } from 'lucide-react';
import Image from 'next/image';

export default function Rating() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Card>
        <CardContent>
          <p className="mb-2 font-medium">Cater to men and women</p>
          <div className="relative mb-2 h-32 w-full rounded-sm bg-purple-300 text-sm">
            <Button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-700 text-white">
              Rate Card
            </Button>
          </div>

          <p className="mb-2 text-sm font-medium">Description</p>
          <Separator className="my-3 bg-black" />
          <div className="flex gap-4 text-sm">
            <div className="text-muted-foreground flex items-center gap-2">
              <Phone className="size-4" />
              <span>+91 9876543210</span>
            </div>
            <div className="text-muted-foreground flex items-center gap-2">
              <Phone className="size-4" />
              <span>+91 9876543210</span>
            </div>
          </div>
          <div>
            <div className="mt-4 flex items-center gap-4">
              <div className="flex gap-2">
                <Image
                  src="/facebook.png"
                  alt="facebook"
                  height={100}
                  width={100}
                  className="size-5 object-cover"
                />
                <Image
                  src="/instagram.jpeg"
                  alt="facebook"
                  height={100}
                  width={100}
                  className="size-5 object-cover"
                />
                <Image
                  src="/x.jpg"
                  alt="facebook"
                  height={100}
                  width={100}
                  className="size-5 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button className="h-11 w-full bg-gradient-to-r from-fuchsia-400 via-purple-400 to-violet-700 text-sm font-medium text-white">
        Book Appointment
      </Button>
    </div>
  );
}
