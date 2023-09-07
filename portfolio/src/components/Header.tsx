import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState<string>('');

  useEffect(() => {
    // 現在の日付と時間を取得
    const updateDateTime = () => {
      const now = new Date();
      const formattedDateTime = `${now.toLocaleDateString()} | ${now.toLocaleTimeString()}`;
      setCurrentDateTime(formattedDateTime);
    };

    // 初回の取得
    updateDateTime();

    // 1秒ごとに日付と時間を更新
    const intervalId = setInterval(updateDateTime, 1000);

    // コンポーネントがアンマウントされたときにインターバルをクリア
    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="header">
      <div className="header-content">
        <div className="left-bar">Tomas's Portfolio | </div>
        <div className="right-bar">{currentDateTime}</div>
      </div>
    </header>
  );
}

export default Header;
