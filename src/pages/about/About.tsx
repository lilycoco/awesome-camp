import React, { ReactNode } from "react";

import Section from "../../Layouts/Section";
import Anchor from "../../components/Anchor";
import Balloon from "../../components/Balloon";
import Title from "../../components/Title";
import ScrollRevealContainer from "../../components/ScrollRevealContainer";

export default function About() {
  const InfoContainer = ({
    title,
    description,
  }: {
    title: string;
    description: string | ReactNode;
  }) => (
    <div className="flex items-start border-b border-gray-400 py-6">
      <div className="w-20 min-w-[5rem] break-all pt-2 text-sm font-bold md:w-40">
        {title}
      </div>
      <div>{description}</div>
    </div>
  );

  return (
    <Section wrapperClass="bg-light-brown-gray" sectionClass="max-w-screen-md">
      <Title enLabel="About Us" className="m-auto" />
      <div className="mb-36">
        <ScrollRevealContainer origin="left" delay={600}>
          <div className="mb-14 font-['Noto_Sans'] text-3xl">Company</div>
        </ScrollRevealContainer>
        <div className="border-t border-gray-400">
          <InfoContainer
            title="Company Name"
            description="Awesome Camp & Glamping"
          />
          <InfoContainer title="Found" description="2014年4月" />
          <InfoContainer
            title="Works"
            description={
              <ul>
                <li>アウトドア用品店（店舗及びネットショップ）</li>
                <li>撮影及びイベント現場向けレンタル</li>
                <li>アウトドアウェディング及びイベントコーディネート</li>
                <li>ウェブメディア運営</li>
              </ul>
            }
          />
        </div>
      </div>
      <div className="mb-20">
        <ScrollRevealContainer origin="left">
          <div className="mb-14 font-['Noto_Sans'] text-3xl">History</div>
        </ScrollRevealContainer>
        <div className="border-t border-gray-400">
          <InfoContainer
            title="2014.04"
            description={
              <ul>
                <li>
                  <Anchor url="http://awesomebarbecue.com/">
                    「Awesome Barbecue.com」
                  </Anchor>
                  ウェブメディア開設
                </li>
              </ul>
            }
          />
          <InfoContainer
            title="2016.06"
            description={
              <ul>
                <li>
                  <Anchor url="https://abbq.official.ec/">
                    「Awesome Camp & Glamping」
                  </Anchor>
                  at BASE ウェブストア開設
                </li>
                <li>販売・レンタル・コーディネート事業開始</li>
              </ul>
            }
          />
        </div>
      </div>
      <Balloon />
    </Section>
  );
}
