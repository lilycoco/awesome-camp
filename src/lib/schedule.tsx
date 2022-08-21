import { Link } from "react-router-dom";
import Button from "../components/Button";

export const scheduleList = [
  {
    title: "お問合せ (6ヵ月前〜)",
    description: (
      <div>
        まずは、お問合せフォームよりお気軽にご連絡下さい。できれば半年以上余裕を持ってお問い合わせをいただけると安心ですが、最初のお問い合わせから最短２か月での実施の実績もございます。
      </div>
    ),
  },
  {
    title: "お打ち合わせ",
    description: (
      <div>
        コンセプトやご予算、日程、開催場所など、ご要望をお伺いさせていただきます。
        必要に応じて開催場所や、お食事、楽しいフォトバスやポートレートマシーンといったゲストと一緒に楽しめるコンテンツなどのご紹介もさせていただいております。（紹介料無料）
        『必要なものだけを手配します』をコンセプトとしておりますので、ご自身で準備されるアイテムの持ち込みも歓迎です。
      </div>
    ),
  },
  {
    title: "場所の確保",
    description: (
      <div>
        お打ち合わせでお伺いしたご希望を元に、開催場所を確保いたします。
        ご希望の開催場所がある場合でも、実際に開催可能かをスタッフが現地に赴き確認します。
        過去の開催例についてはウェディングレポートをご覧ください。
        <Link to="/report">
          <Button label="Wedding Report" className="ml-0 mt-6" />
        </Link>
      </div>
    ),
  },
  {
    title: "必要品目の選定",
    description: (
      <div>
        場所と日程の確定後、必要品目の選定に入ります。
        <br />
        ※テントやタープ以外の項目につきましては、ご依頼いただいても、ご用意いただいても自由です。
        <div className="font-bold mt-4 mb-2">
          {"[ アウトドアウェディングに必要な主な項目]"}
        </div>
        <ul className="list-disc ml-4">
          <li>テント・タープ・家具類</li>
          <li>装飾</li>
          <li>フード関係</li>
          <li>撮影関係（フォト・ムービー）</li>
          <li>演目ごとの準備物</li>
          <li>ウェディングケーキ</li>
          <li>司会</li>
          <li>メイク</li>
          <li>進行係（タイムキーパー）</li>
          など
        </ul>
        こちらでご用意可能な品目について、詳しくはユーザーガイドをご覧ください。
        <Link to="/guide">
          <Button label="User Guide" className="ml-0 mt-6" />
        </Link>
      </div>
    ),
  },
  {
    title: "パーティ当日",
    description: (
      <div>ギフト・メイク・音響・装飾・運営機材等、手配いたします。</div>
    ),
  },
  {
    title: "会場設営・撤収",
    description: (
      <div>
        いよいよ本番。パーティをお楽しみください。
        <div className="font-bold mt-4 mb-2">{"[ 当日のタイムライン例 ]"}</div>
        <ul className="mb-10">
          <li className="flex items-center">
            <div className="w-24 font-bold text-sm">１３：３０</div>ゲスト受付
          </li>
          <li className="flex items-center">
            <div className="w-24 font-bold text-sm">１４：００</div>
            セレモニー開始
          </li>
          <li className="flex items-center">
            <div className="w-24 font-bold text-sm"></div>
            ウェルカムスピーチ
          </li>
          <li className="flex items-center">
            <div className="w-24 font-bold text-sm"></div>
            ケーキカット
          </li>
          <li className="flex items-center">
            <div className="w-24 font-bold text-sm"></div>
            フォトセッション
          </li>
          <li className="flex items-center">
            <div className="w-24 font-bold text-sm">１５：００</div>
            乾杯・ パーティー開始
          </li>
          <li className="flex items-center">
            <div className="w-24 font-bold text-sm">１７：００</div>
            締めの挨拶・パーティー終了
          </li>
        </ul>
        パーティの後、お客様によってはアフターパーティーでお泊りになるゲストの方と焚火をしながら余韻を楽しまれる方もいらっしゃいます。
        焚火のケアも、火おこしから火の管理までスタッフが行うことも可能ですので、お気軽にご相談ください。
      </div>
    ),
  },
];
