import Image from 'next/image';

export default function Banner() {
  return <Image src="/Picture.jpg" alt="Banner" height={100} width={1000} className='object-cover h-60 w-full'/>;
}
