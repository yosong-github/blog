# 构建阶段
FROM node:21-alpine AS builder

WORKDIR /app

# 复制依赖文件
COPY package.json package-lock.json* ./


# 安装依赖
RUN node -v \
    npm -v \
    npm config set registry https://registry.npmmirror.com && \
    npm i -g pnpm && \
    pnpm config set registry https://registry.npmmirror.com && \
    pnpm i

# 复制应用代码
COPY . .

# 构建应用
RUN pnpm run build

# 生产阶段
FROM node:21-alpine AS runner

WORKDIR /app

# 设置为生产环境
ENV NODE_ENV=production

# 从构建阶段复制必要文件
COPY --from=builder /app/.output ./output
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# 暴露端口
EXPOSE 3000

# 启动应用
CMD ["node", "output/server/index.mjs"]
