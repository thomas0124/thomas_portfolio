import React from 'react';
// 必要に応じてスタイルを適用するCSSファイルをインポート

const Top: React.FC = () => {

  return (
    <section className="top">
      <h1>Hello everyone!!</h1>
      <p>
        I'm  &nbsp;
        <span className="scale-fade-in">
          Tomas
        </span>
      </p>
      <p>Front-end Engineer</p>
      <p>Scroll Down</p>
    </section>
  );
}

export default Top;
