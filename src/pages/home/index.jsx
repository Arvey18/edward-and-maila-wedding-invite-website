// components
import PageNavigation from '../../components/pageNavigation';
import BannerSection from '../../components/bannerSection';
import CoupleInfo from '../../components/coupleInfo';
import LocationSection from '../../components/locationSection';
import EventTimeSection from '../../components/eventTimeSection';
import RSVPSection from '../../components/RSVPSection';
import PreFooter from '../../components/PreFooterSection';
import Footer from '../../components/footer';

const HomePage = () => {
  return (
    <>
      <PageNavigation />
      <BannerSection />
      <CoupleInfo />
      <LocationSection />
      <EventTimeSection />
      <RSVPSection />
      <PreFooter />
      <Footer />
    </>
  );
};

export default HomePage;
