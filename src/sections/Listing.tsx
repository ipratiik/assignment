import { Button } from '@/app/_components/ui/button';
import { Card, CardContent, CardTitle } from '@/app/_components/ui/card';
import Image from 'next/image';

export default function Listing() {
  const collections = [
    'Winter Collection',
    'Western Wear',
    'Ethnic Wear',
    'Winter Collection',
  ];

  return (
    <div className="md:col-span-2">
      <div className="grid gap-4 sm:grid-cols-2">
        {collections.map((name, index) => (
          <CollectionCard key={index} title={name} />
        ))}
      </div>

      <div className="mt-3 flex justify-start">
        <Button className="gap-2 border-2 rounded-none border-purple-700 text-purple-700">
          See all
          <span>→</span>
        </Button>
      </div>
    </div>
  );
}

function CollectionCard({ title }: { title: string }) {
  return (
    <Card>
      <CardTitle className="mb-2 text-center uppercase">{title}</CardTitle>
      <CardContent className="p-0">
        <Image
          src="/Picture.jpg"
          alt={title}
          width={400}
          height={300}
          className="size-full rounded-sm object-cover"
        />
      </CardContent>
    </Card>
  );
}
