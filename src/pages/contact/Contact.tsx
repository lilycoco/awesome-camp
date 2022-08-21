import React from "react";
import Button from "../../components/Button";
import Title from "../../components/Title";

export default function Contact() {
  return (
    <div className="bg-light-brown-gray">
      <Title enLabel="Contact" className="m-auto pt-24 mb-24" />
      <section className="max-w-screen-md m-auto pb-24">
        <p className="mb-10">どんなご質問でも、お気軽にお問合せください。</p>
        <form>
          <div className="pb-8">
            <label className="text-sm font-bold">お名前</label>
            <div className="flex gap-4">
              <input
                placeholder="姓"
                type="text"
                className="rounded-md px-4 w-full"
              />
              <input
                placeholder="名"
                type="text"
                className="rounded-md px-4 w-full"
              />
            </div>
          </div>
          <div className="pb-8">
            <label className="text-sm font-bold">メールアドレス</label>
            <input
              placeholder="例）example@awesome.co.jp"
              type="text"
              className="rounded-md px-4 w-full"
            />
          </div>
          <div className="pb-8">
            <label className="text-sm font-bold">電話番号</label>
            <input
              placeholder="例）0123-4567-8900"
              type="text"
              className="rounded-md px-4 w-full max-w-sm block"
            />
          </div>
          <div className="pb-8">
            <label className="text-sm font-bold">
              ご利用のプラン（お決まりの場合）
            </label>
            <select
              name="ご利用時期"
              className="px-4 py-3 rounded-md block w-full max-w-sm"
            >
              <option value="none" selected disabled hidden>
                選択してください
              </option>
              <option value="1">シンプルプラン（設営のみ）</option>
              <option value="2">フルサポートプラン</option>
            </select>
          </div>
          <div className="pb-8">
            <label className="text-sm font-bold">
              ご利用時期（お決まりの場合）
            </label>
            <input
              type="month"
              name="calendar"
              min="2022-08"
              className="px-4 rounded-md block w-full max-w-sm"
            ></input>
          </div>
          <div className="pb-8">
            <label className="text-sm font-bold">
              ご利用の地域（お決まりの場合）
            </label>
            <input
              placeholder="都道府県名、施設名等"
              type="p"
              className="rounded-md px-4 w-full"
            />
          </div>

          <div className="pb-8">
            <label className="text-sm font-bold">お問い合わせ内容</label>
            <textarea
              name="comment"
              placeholder="お問い合わせの具体的な内容をご記入ください。"
              className="px-4 py-2 h-48 rounded-md block w-full"
            ></textarea>
          </div>
          <Button label="Send" className="mt-10" />
        </form>
      </section>
    </div>
  );
}
