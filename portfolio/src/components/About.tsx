import React, { useState, useEffect } from 'react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [textToDisplay, setTextToDisplay] = useState<string>('');

  useEffect(() => {
    // テキストを1文字ずつ表示する関数
    const showTextOneByOne = (text: string, index: number) => {
      if (index <= text.length) {
        setTextToDisplay(text.substring(0, index));
        setTimeout(() => {
          showTextOneByOne(text, index + 1);
        }, 100); // 100ミリ秒ごとに次の文字を表示
      } else {
        setTimeout(() => {
          setIsVisible(true); // テキスト表示が完了したらisVisibleをtrueに設定
        }, 1000); // 1秒後にテキストを再表示するためにisVisibleをfalseに設定
      }
    };

    // ページが読み込まれたときにテキスト表示を開始
    showTextOneByOne("Toma_Shimizu", 0);

    // スクロールイベントリスナーを追加
    const handleScroll = () => {
      setIsVisible(false); // スクロールされたらテキストを非表示にする
    };

    window.addEventListener('scroll', handleScroll);

    // コンポーネントがアンマウントされたときにイベントリスナーを削除
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // 一度だけ実行

  return (
    <section className="about">
      <h2>About</h2>
      <img src="/image/thomas.jpg" alt="Profile" className="profile-image" />
      <h3 className={isVisible ? "fade-in" : ""}>{textToDisplay}</h3>
      <div className = "slide-in">
        <p>名城大学 理工学部 情報工学科</p> 
        <p>フロントエンジニア</p>
      </div>
    </section>
  );
}

export default About;
