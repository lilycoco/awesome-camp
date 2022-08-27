import React, { ReactNode } from "react";
import Anchor from "../../components/Anchor";
import Balloon from "../../components/Balloon";
import Title from "../../components/Title";
import Section from "../../Layouts/Section";

export default function About() {
  const InfoContainer = ({
    title,
    description,
  }: {
    title: string;
    description: string | ReactNode;
  }) => (
    <div className="flex items-start border-b border-gray-400 py-6">
      <div className="w-40 pt-2 text-sm font-bold">{title}</div>
      <div>{description}</div>
    </div>
  );

  return (
    <Section wrapperClass="bg-light-brown-gray">
      <Title enLabel="About Us" className="m-auto pb-16" />
      <section className="m-auto max-w-screen-lg pb-24">
        <div className="mb-36">
          <div className="mb-14 font-['Noto_Sans'] text-3xl">Company</div>
          <div className="max-w-2xl border-t border-gray-400">
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
          <div className="mb-14 font-['Noto_Sans'] text-3xl">History</div>
          <div className="max-w-2xl border-t border-gray-400">
            <InfoContainer
              title="2014.04"
              description={
                <ul>
                  <li>「Awesome Barbecue.com」 ウェブメディア開設</li>
                  <li>
                    <Anchor url="http://awesomebarbecue.com/">
                      http://awesomebarbecue.com/
                    </Anchor>
                  </li>
                </ul>
              }
            />
            <InfoContainer
              title="2016.06"
              description={
                <ul>
                  <li>「Awesome Camp & Glamping」at BASE ウェブストア開設</li>
                  <li>
                    <Anchor url="https://abbq.official.ec/">
                      https://abbq.official.ec/
                    </Anchor>
                  </li>
                  <li>販売・レンタル・コーディネート事業開始</li>
                </ul>
              }
            />
          </div>
        </div>
      </section>
      <Balloon />
    </Section>
  );
}
