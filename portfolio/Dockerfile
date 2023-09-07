# ベースイメージを指定
FROM node:14

# 作業ディレクトリを設定
WORKDIR /app

# 依存関係をコピーしてインストール
COPY package.json /app/
RUN npm install

# アプリケーションのソースコードをコピー
COPY . /app

# アプリケーションをビルド
RUN npm build

# ポートをエクスポート
EXPOSE 3000

# アプリケーションを起動
CMD ["npm", "start"]