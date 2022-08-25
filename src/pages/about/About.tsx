import React, { ReactNode } from "react";
import Anchor from "../../components/Anchor";
import Balloon from "../../components/Balloon";
import Title from "../../components/Title";

export default function About() {
  const InfoContainer = ({
    title,
    description,
  }: {
    title: string;
    description: string | ReactNode;
  }) => (
    <div className="flex py-6 border-b border-gray-400 items-start">
      <div className="w-40 font-bold text-sm pt-2">{title}</div>
      <div>{description}</div>
    </div>
  );

  return (
    <div className="bg-light-brown-gray">
      <Title enLabel="About Us" className="m-auto pt-24 pb-16" />
      <section className="pb-24 max-w-screen-lg m-auto">
        <div className="mb-36">
          <div className="font-['Noto_Sans'] text-3xl mb-14">Company</div>
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
          <div className="font-['Noto_Sans'] text-3xl mb-14">History</div>
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
                    <a
                      href="https://abbq.official.ec/"
                      className="text-blue-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://abbq.official.ec/
                    </a>
                  </li>
                  <li>販売・レンタル・コーディネート事業開始</li>
                </ul>
              }
            />
          </div>
        </div>
      </section>
      <Balloon />
    </div>
  );
}
