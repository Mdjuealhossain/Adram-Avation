import React from "react";

import ImageURL from "@/components/ImageUrl";
import Container from "@/components/Container";
import VisaDetails from "@/widget/VisaDetails";

const Visa = () => {
    return (
        <div>
            <section>
                <div className="xl:h-[28.125rem] lg:h-80 h-40 sm:h-52 md:h-64 md:mt-20 mt-16">
                    <ImageURL image={"/assets/images/visa/visa_banner.avif"} height={450} width={1920} alt={"banner"} className="!h-full !w-full object-cover" />
                </div>
            </section>
            <section className=" mt-16">
                <Container>
                    <VisaDetails />
                </Container>
            </section>
        </div>
    );
};

export default Visa;
