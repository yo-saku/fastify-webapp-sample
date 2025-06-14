# Node.js 20 の公式イメージをベースにする
FROM node:20

# 必要なパッケージのインストールとロケール生成
RUN apt-get update && \
    apt-get install -y \
    wget \
    unzip \
    fontconfig \
    fonts-noto-cjk \
    locales \
    libglib2.0-0 \
    libnss3 \
    libgconf-2-4 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libcups2 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    libxss1 \
    libxtst6 \
    libgtk-3-0 \
    libasound2 \
    libgbm1 \
    xauth \
    xvfb && \
    sed -i '/ja_JP.UTF-8/s/^# //g' /etc/locale.gen && \
    locale-gen && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*


# 環境変数でロケールを設定
ENV LANG=ja_JP.UTF-8 \
    LANGUAGE=ja_JP:ja \
    LC_ALL=ja_JP.UTF-8

# 作業ディレクトリを指定
WORKDIR /workspace

# 任意：npm パッケージのプレインストールなどがあればここに書く
# COPY package*.json ./
# RUN npm install

# 任意：アプリのソースコードをコピー
# COPY . .

# 任意：アプリ起動コマンド（devcontainer では未指定でもOK）
# CMD ["npm", "start"]
