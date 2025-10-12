import Banner from '@/sections/Banner';
import Details from '@/sections/Details';
import Header from '@/sections/Header';
import Listing from '@/sections/Listing';
import Rating from '@/sections/Rating';
import SectionTabs from '@/sections/SectionTabs';
import { Fragment } from 'react';

export default function Page() {
  return (
    <Fragment>
      <Header />
      <Details />
      <Banner />
      <section className="grid md:grid-cols-3 gap-4">
        <div className="col-span-2 flex flex-col gap-4">
          <SectionTabs />
          <Listing />
        </div>
        <div className="md:col-span-1">
          <Rating />
        </div>
      </section>
    </Fragment>
  );
}
