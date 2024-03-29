import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import AboutAward from "../containers/about/about-awards";
import AboutBannerContainer from "../containers/about/about-banner-container";
import BrandTwoContainer from "../containers/global/brand-two";
import SkillContainer from "../containers/global/skill";
import Layout from "../layouts";
import Footer from "../layouts/footer";
import Header from "../layouts/header";

const HomePage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Huda Mukhtar" />
                <div className="main-wrapper">
                    <Header />
                    <AboutBannerContainer />
                    <AboutAward />
                    {/* <SkillContainer /> */}
                    <Footer />
                </div>
                <ScrollToTop />
            </Layout>
        </React.Fragment>
    );
};

export default HomePage;
