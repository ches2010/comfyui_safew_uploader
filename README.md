# ComfyUI SafeW Uploader

将 ComfyUI 生成的图像一键上传到 SafeW 频道，并支持在节点中预览！

![Preview](examples/preview.png)

## ✨ 功能

- 🖼️ 节点内预览生成图像
- 🚀 一键上传至 SafeW 频道
- 🔐 支持 Token、频道 ID、说明、剧透、静音等设置
- 🧩 支持通过 **ComfyUI Manager** 一键安装
- 🔄 `git clone` 后自动加载，无需手动复制
- 支持全局配置、多频道管理
- **支持上传视频 (`sendVideo`)**
- **支持上传通用文件 (`sendDocument`)**
- **统一上传节点，通过下拉选择类型**
- **自动识别输入是图像还是视频**
- **完全兼容 ComfyUI Manager 一键安装**

## 📦 安装方式

### 方法 1：通过 ComfyUI Manager（推荐）

1. 打开 ComfyUI 界面
2. 进入 **Manager > Custom Nodes**
3. 搜索 `ComfyUI-SafeW-Uploader`
4. 点击 **Install**

### 方法 2：手动安装

```bash
cd ComfyUI/custom_nodes
git clone https://github.com/ches2010/ComfyUI-SafeW-Uploader.git
```


重启 ComfyUI 即可使用。

## ⚙️ 使用方法

1. 在工作流中添加 **"SafeW Upload"** 节点
2. 连接 `Save Image` 或 `Preview Image` 输出的 `images`
3. 填写：
   - `token`: 你的 Bot Token（联系 @BotFather 获取）
   - `chat_id`: 频道用户名（如 `@mychannel`）或群组 ID（如 `-100123456789`）
   - `caption`: 图像说明
   - 其他选项按需设置
4. 运行工作流，图像将自动上传！

| 节点 | 功能 |
|------|------|
| `SafeW Config` | 配置 Token 和 Chat ID，支持多账户切换 |
| `SafeW Upload` | 选择上传类型：图片 / 视频 / 文件 |

### 使用流程

1. 添加 `SafeW Config` 节点，设置默认账户
2. 连接到 `SafeW Upload` 节点
3. 选择上传类型：
   - 图像：连接 `images`
   - 文件：输入文件路径（或未来支持拖拽）
4. 运行 → 自动上传

## 🛠️ 依赖

- ComfyUI ≥ 0.3
- Python ≥ 3.8
- `requests`（通常已预装）

## 📄 许可证

MIT License
非常好！我们将对原有插件进行 **模块化升级**，实现以下目标：

---
