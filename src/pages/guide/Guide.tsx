import React from "react";
import Title from "../../components/Title";
import plan_1 from "../../assets/images/plan_1.jpeg";
import plan_2 from "../../assets/images/plan_2.jpeg";
import { serviceList } from "../../lib/services";

export default function Guide() {
  let myRef: (HTMLDivElement | null)[] = [];

  const onClick = (index: number) => {
    myRef[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const SubTitle = ({ en, ja }: { en: string; ja: string }) => (
    <div className="mb-20">
      <div className="flex items-center mb-2">
        <h2 className="text-4xl font-bold mr-5 whitespace-nowrap">{en}</h2>
        <div className="w-full border-t border-black" />
      </div>
      <p>{ja}</p>
    </div>
  );

  const Plan = ({
    title,
    description,
    reccomend1,
    reccomend2,
    src,
    className,
  }: {
    title: string;
    description: string;
    reccomend1: string;
    reccomend2: string;
    src: string;
    className?: string;
  }) => (
    <div
      className={
        "flex justify-between w-full gap-12 scroll-reveal mb-24 " + className
      }
    >
      <div className="w-full">
        <h2 className="mb-5 text-2xl font-bold">{title}</h2>
        <p>{description}</p>
        <div className="rounded-md mt-4">
          <span className="font-bold">
            {"[ こんなおふたりにおすすめです ]"}
          </span>
          <ul className="list-disc ml-4 underline underline-offset-4 decoration-2 decoration-yellow">
            <li>{reccomend1}</li>
            <li>{reccomend2}</li>
          </ul>
        </div>
      </div>
      <img
        src={src}
        alt="reccomend"
        className="w-125 h-80 object-cover rounded-xl"
      />
    </div>
  );

  return (
    <div>
      <Title enLabel="User Guide" className="m-auto pt-24" />
      <section className="py-24 max-w-screen-lg m-auto">
        <SubTitle en="Plans" ja="選べるプラン" />
        <div className="pb-16">
          <Plan
            title="シンプルプラン"
            description="イベントセットのレンタル・設営のみのシンプルなプランです。一気にグランピング空間が広がる「イベントセット」を専門スタッフがセッティング致します。設営～撤収まで一貫して行いますので、幹事や準備をする方々は準備に専念したり、ゲストとの交流の時間をお持ちいただけます。"
            reccomend1="パーティーの進行は自分たちでやりたい"
            reccomend2="飲食店を経営する友人がいるので、食事の手配はできそう"
            src={plan_1}
          />
          <Plan
            title="フルサポートプラン"
            description="ロケーションのご紹介、「イベントセット」のセッティングに加え、フード手配・音響機器や当日のパーティーの進行までのサポートのつくプランです。"
            reccomend1="手配関係が苦手なのでおまかせしたい"
            reccomend2="ハンドメイドなウェディングをやりたいけど、なるべくゲストの手を借りたくない"
            src={plan_2}
            className="flex-row-reverse"
          />
        </div>
        <div className="p-5 border-2 border-double border-black rounded-lg mx-10 relative">
          <div className="absolute -top-12 -left-12 font-oleo text-2xl w-20 h-20 flex items-center justify-center rounded-full bg-yellow">
            Tips!
          </div>
          <p>
            どちらのプランも『必要なものだけを手配します』をコンセプトとしておりますので、ご自身で準備されるアイテムの持ち込みも歓迎です！
            コンセプトとコストに見合ったアウトドアウェディングパーティーをご提供いたします。
            <br />
            必要なものの手配やパーティの司会進行についてなど、お気軽にご相談ください。
          </p>
        </div>
      </section>
      <section className="bg-light-brown-gray">
        <div className="py-24 max-w-screen-lg m-auto">
          <SubTitle
            en="Our Service"
            ja="Awesome Camp & Glamping ができるコト"
          />
          <div className="mb-20">
            {serviceList.map(({ title }, index) => (
              <button
                key={index}
                className="w-full text-xl p-2 px-4 shadow-md bg-white mb-2 block max-w-2xl text-left"
                onClick={() => onClick(index)}
              >
                <span className="mr-6 text-lg">{`0${index + 1}.`}</span>
                {title}
              </button>
            ))}
          </div>
          {serviceList.map(({ title, description, img }, index) => (
            <div key={index} className="flex -gap-10 mb-10">
              <div
                className="w-full p-8 shadow-md bg-white mb-2 block max-w-2xl rounded-lg z-10 -mr-14 opacity-90"
                id={`service${index}`}
                ref={(ref) => (myRef[index] = ref)}
              >
                <h3 className="text-xl mb-4 font-bold">
                  <span className="mr-6 text-2xl">{`0${index + 1}.`}</span>
                  {title}
                </h3>
                <div>{description}</div>
              </div>
              <img
                src={img}
                alt="reccomend"
                className="max-w-sm h-72 object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
