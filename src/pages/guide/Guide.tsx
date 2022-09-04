import React from "react";

import Section from "../../Layouts/Section";
import plan_1 from "../../assets/images/plan_1.jpeg";
import plan_2 from "../../assets/images/plan_2.jpeg";
import Balloon from "../../components/Balloon";
import Title from "../../components/Title";
import { serviceList } from "../../lib/services";
import ScrollRevealContainer from "../../components/ScrollRevealContainer";

export default function Guide() {
  const onClick = (index: number) => {
    const id = `service${index}`;
    const yOffset = -120;
    const element = document.getElementById(id);
    const y =
      element &&
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    if (y) {
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const SubTitle = ({ en, ja }: { en: string; ja: string }) => (
    <div className="mb-20">
      <div className="mb-2 flex items-center">
        <h2 className="mr-5 whitespace-nowrap text-4xl font-bold">{en}</h2>
        <div className="w-full border-t border-black" />
      </div>
      <p>{ja}</p>
    </div>
  );

  const Plan = ({
    title,
    description,
    recommend1,
    recommend2,
    src,
    className,
  }: {
    title: string;
    description: string;
    recommend1: string;
    recommend2: string;
    src: string;
    className?: string;
  }) => (
    <ScrollRevealContainer>
      <div
        className={
          "scroll-reveal mb-24 flex w-full flex-col justify-between gap-12 md:flex-row " +
          className
        }
      >
        <div className="w-full">
          <h2 className="mb-5 text-2xl font-bold">{title}</h2>
          <p>{description}</p>
          <div className="mt-4 rounded-md">
            <span className="font-bold">
              {"[ こんなおふたりにおすすめです ]"}
            </span>
            <ul className="ml-4 list-disc underline decoration-yellow decoration-2 underline-offset-4">
              <li>{recommend1}</li>
              <li>{recommend2}</li>
            </ul>
          </div>
        </div>
        <img
          src={src}
          alt="recommend"
          className="h-80 w-125 rounded-xl object-cover"
        />
      </div>
    </ScrollRevealContainer>
  );

  return (
    <div>
      <Title enLabel="User Guide" className="m-auto pt-24" />
      <Section sectionClass="pt-5">
        <SubTitle en="Plans" ja="選べるプラン" />
        <div className="pb-16">
          <Plan
            title="シンプルプラン"
            description="イベントセットのレンタル・設営のみのシンプルなプランです。一気にグランピング空間が広がる「イベントセット」を専門スタッフがセッティング致します。設営～撤収まで一貫して行いますので、幹事や準備をする方々は準備に専念したり、ゲストとの交流の時間をお持ちいただけます。"
            recommend1="パーティーの進行は自分たちでやりたい"
            recommend2="飲食店を経営する友人がいるので、食事の手配はできそう"
            src={plan_1}
          />
          <Plan
            title="フルサポートプラン"
            description="ロケーションのご紹介、「イベントセット」のセッティングに加え、フード手配・音響機器や当日のパーティーの進行までのサポートのつくプランです。"
            recommend1="手配関係が苦手なのでおまかせしたい"
            recommend2="ハンドメイドなウェディングをやりたいけど、なるべくゲストの手を借りたくない"
            src={plan_2}
            className="md:flex-row-reverse"
          />
        </div>
        <ScrollRevealContainer>
          <div className="relative ml-5 rounded-lg border-2 border-double border-black p-5 md:mx-10">
            <div className="absolute -top-12 -left-10 flex h-20 w-20 items-center justify-center rounded-full bg-yellow font-oleo text-2xl md:-top-12 md:-left-12">
              Tips!
            </div>
            <p>
              どちらのプランも『必要なものだけを手配します』をコンセプトとしておりますので、ご自身で準備されるアイテムの持ち込みも歓迎です！
              コンセプトとコストに見合ったアウトドアウェディングパーティーをご提供いたします。
              <br />
              必要なものの手配やパーティの司会進行についてなど、お気軽にご相談ください。
            </p>
          </div>
        </ScrollRevealContainer>
      </Section>
      <Section wrapperClass="bg-light-brown-gray">
        <SubTitle en="Our Service" ja="Awesome Camp & Glamping ができるコト" />
        <div className="mb-20 flex-col md:flex md:h-60 md:flex-wrap">
          {serviceList.map(({ title }, index) => (
            <div className="mb-2 max-w-2xl pr-6 md:w-1/2" key={index}>
              <button
                onClick={() => onClick(index)}
                className="flex w-full bg-white p-2 px-4 text-left text-xl shadow-md"
              >
                <span className="mr-6 text-lg">{`0${index + 1}.`}</span>
                {title}
              </button>
            </div>
          ))}
        </div>
        <>
          {serviceList.map(({ title, description, img }, index) => (
            <ScrollRevealContainer>
              <div
                key={index}
                className="-gap-10 mb-10 flex flex-col md:flex-row"
              >
                <div
                  className="z-10 mt-5 -mb-5 -mr-14 block w-full rounded-lg bg-white p-8 opacity-90 shadow-md md:mb-2 md:max-w-2xl"
                  id={`service${index}`}
                >
                  <h3 className="mb-4 text-xl font-bold">
                    <span className="mr-6 text-2xl">{`0${index + 1}.`}</span>
                    {title}
                  </h3>
                  <div>{description}</div>
                </div>

                <img
                  src={img}
                  alt="recommend"
                  className="h-72 object-cover md:max-w-sm"
                />
              </div>
            </ScrollRevealContainer>
          ))}
        </>
      </Section>
      <Balloon />
    </div>
  );
}
