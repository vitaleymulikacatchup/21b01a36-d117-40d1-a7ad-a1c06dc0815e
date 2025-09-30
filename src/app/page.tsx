"use client";
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarBase from '@/components/navigation/NavbarBase';
import VoidHero from '@/components/sections/layouts/hero/VoidHero';
import BaseAbout from '@/components/sections/layouts/about/BaseAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

const theme: SiteTheme = {
  styleVariant: "funAndTrendy",
  colorTemplate: 1,
  textAnimation: "slide",
  buttonOption: "motion-icon"
};

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarBase
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/tmp/design-a-simple-high-contrast-logo-for-s-1759257333087-99832db0.jpg"
          logoAlt="Solana Ventures"
          leftButtonText="Learn More"
          rightButtonText=""
          onLeftButtonClick={() => window.scrollTo({ top: document.getElementById('about')?.offsetTop, behavior: 'smooth' })}
          className=""
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <VoidHero title="Welcome to Solana Ventures" description="Join us in exploring the world of crypto with a friendly alien mascot!" primaryButtonText="Learn More" secondaryButtonText="" />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <BaseAbout title="About Solana Ventures" descriptions={['Solana Ventures is dedicated to fostering innovation in the cryptocurrency space.', 'Our alien mascot embodies curiosity and accessibility.']} />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="reveal" />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <NumberGridTokenomics title="Tokenomics" description="Explore our unique token distribution and ecosystem." />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasisBackgroundGradient logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/tmp/design-a-simple-high-contrast-logo-for-s-1759257333087-99832db0.jpg" logoAlt="Solana Ventures" logoText="Solana Ventures" items={[{ label: 'Privacy Policy', onClick: () => alert('Privacy policy clicked') }, { label: 'Terms of Service', onClick: () => alert('Terms of service clicked') }]} className="" backgroundBlobStyle={{}} gradientClassName="" gradientStyle={{}} />
      </div>
    </SiteThemeProvider>
  );
}